import { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({
    inputUsername: '',
    inputPassword: ''
  });
  const [badLogin, setBadLogin] = useState(null);

  const navigate = useNavigate();

  const loggingIn = async(event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.inputUsername,
          password: formData.inputPassword
        })
      });
      const userLogin = await response.json();
      console.log(userLogin);

      if (userLogin.message === 'Bad Credentials'|| userLogin.token.message === 'Bad Token') {
        setBadLogin('Invalid login attempt')
      } else {
        setToken(userLogin.token)
        localStorage.setItem('token', userLogin.token);
        localStorage.setItem('username', userLogin.username);
        navigate('/');
      }
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="login-page">
          <form onSubmit={loggingIn} className="login-form">
            <h2>Login</h2>
            <input 
              placeholder="username" 
              onChange={(event) => {setFormData.inputUsername(event.target.value)}}
            />
            <input 
              placeholder="password" 
              type="password"
              onChange={(event) => {setFormData.inputPassword(event.target.value)}}
            />
            <button>Login</button>
            {badLogin ? <p>{badLogin}</p> : null}
          </form>
      </div>
    </>

  )
}

export default Login;