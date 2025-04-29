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

  const validateUsernameLength = useEffect(() => {
      if (newUsername.length >= 6) {
        setSixCharacters('🥯');
      } else {
        setSixCharacters('👎');
      }
  });

  const validatePasswordsMatch = useEffect(() => {
    if (newPassword !== newPasswordVerify) {
      setPasswordsMatch('👎');
    } else {
      setPasswordsMatch('🥯');
    }
  });

  const validatePasswordLength = useEffect(() => {
    if (newPassword.length >= 8 && newPasswordVerify.length >= 8) {
      setEightCharacters('🥯');
    } else {
      setEightCharacters('👎');
    }
  });

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
      <h2>Register an account</h2>
      <form onSubmit={addNewUser}>
        <input
          type="test"
          placeholder="Username"
          minlength="6"
          required
          value={newUsername}
          onChange={(event) => { 
            setNewUsername(event.target.value);
            validateUsernameLength;
          }}
        />
        <input 
          type="password"
          placeholder="Enter Password"
          minLength="8"
          required
          value={newPassword}
          onChange={(event) => { 
            setNewPassword(event.target.value);
            validatePasswordLength;
            validatePasswordsMatch;
          }}
        />
        <input 
          type="password"
          placeholder="Verify Password"
          minLength="8"
          required
          value={newPasswordVerify}
          onChange={(event) => { 
            setNewPasswordVerify(event.target.value);
            validatePasswordLength;
            validatePasswordsMatch;
          }}
        />
        <button type="submit">Create Account</button>
        <h3>Username At Least 6 Characters: {sixCharacters}</h3>
        <h3>Passwords Match: {passwordsMatch}</h3>
        <h3>Password At Least 8 Characters: {eightCharacters}</h3>
      </form>
    </>
  )
}

export default Register;