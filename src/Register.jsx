import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordVerify, setNewPasswordVerify] = useState('');

  const navigate = useNavigate();

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
          onChange={(event) => { setNewUsername(event.target.value)}}
        />
        <input 
          type="password"
          placeholder="Enter Password"
          minLength="8"
          onChange={(event) => { setNewPassword(event.target.value)}}
        />
        <input 
          type="password"
          placeholder="Verify Password"
          minLength="8"
          onChange={(event) => { setNewPasswordVerify(event.target.value)}}
        />
        <button type="submit">Create Account</button>
      </form>
    </>
  )
}

export default Register;