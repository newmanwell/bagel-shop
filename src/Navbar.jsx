import { Link } from 'react-router';


const NavBar = ({ token, setToken }) => {
  // const getToken = localStorage.getItem('token');

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setToken('');
  } 

  return (
    <nav>
      <h1> The Bagel Shop</h1>
      <div>
        <Link to='/'>Home</Link>
        {
          !token ?
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
          :
            <Link onClick={signOut}>Logout</Link>
        }
        
      </div>
    </nav>


  )
}

export default NavBar