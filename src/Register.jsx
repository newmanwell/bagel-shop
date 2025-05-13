import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordVerify, setNewPasswordVerify] = useState('');

  const [sixCharacters, setSixCharacters] = useState('👎');
  const [passwordsMatch, setPasswordsMatch] = useState('👎');
  const [eightCharacters, setEightCharacters] = useState('👎');

  const navigate = useNavigate();

  const validateUsernameLength = (updatedUn) => {
      if (updatedUn.length >= 6) {
        setSixCharacters('🥯');
      } else {
        setSixCharacters('👎');
      }
  };

  const validatePasswordsMatch = (upDatedPwVfy) => {
    if (newPassword !== upDatedPwVfy) {
      setPasswordsMatch('👎');
    } else {
      setPasswordsMatch('🥯');
    }
  };

  const validatePasswordLength = (upDatedPwVfy) => {
    if (newPassword.length >= 8 && upDatedPwVfy.length >= 8) {
      setEightCharacters('🥯');
    } else {
      setEightCharacters('👎');
    }
  };

  const addNewUser = async(event) => {
    event.preventDefault()

      try {
        if (newPassword === newPasswordVerify) {
          const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: newUsername,
              password: newPassword
            })
          });
          navigate('/login');
        }
      } catch(err) {
        console.log(err)
      }
    } 

  return (
    <>
      <div className="register-page">
        <form onSubmit={addNewUser} className="register-form">
        <h2>Register an account</h2>
          <input
            type="test"
            placeholder="Username"
            minlength="6"
            required
            value={newUsername}
            onChange={(event) => { 
              const updatedUn = event.target.value;
              setNewUsername(updatedUn);
              validateUsernameLength(updatedUn);
            }}
          />
          <input 
            type="password"
            placeholder="Enter Password"
            minLength="8"
            required
            value={newPassword}
            onChange={(event) => { 
              const upDatedPw = event.target.value;
              setNewPassword(upDatedPw);
            }}
          />
          <input 
            type="password"
            placeholder="Verify Password"
            minLength="8"
            required
            value={newPasswordVerify}
            onChange={(event) => { 
              const upDatedPwVfy = event.target.value;
              setNewPasswordVerify(upDatedPwVfy);
              validatePasswordLength(upDatedPwVfy);
              validatePasswordsMatch(upDatedPwVfy);
            }}
          />
          <button type="submit">Create Account</button>
          <h3>Username 6 or more characters: {sixCharacters}</h3>
          <h3>Passwords Match: {passwordsMatch}</h3>
          <h3>Password 8 or more characters: {eightCharacters}</h3>
        </form>
      </div>
    </>
  )
}

export default Register;