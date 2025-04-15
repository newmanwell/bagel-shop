import { useState } from "react";

const Login = () => {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  return (
    <>
      <h2>Login</h2>
      <form>
        <input 
          placeholder="username" 
          onChange={(event) => {setInputUsername(event.target.value)}}
        />
        <input 
          placeholder="password" 
          onChange={(event) => {setInputPassword(event.target.value)}}
        />
        <button>Login</button>
      </form>
    </>

  )
}

export default Login;