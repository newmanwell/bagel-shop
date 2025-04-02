import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <nav>
      <h1> The Bagel Shop</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </div>
    </nav>


  )
}

export default NavBar