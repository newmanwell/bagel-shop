import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import AllBagels from "./Bagels.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import NavBar from './Navbar.jsx';
import GetOneBagel from "./Details.jsx";
import Login from './Login.jsx';
import Register from './Register.jsx';
import ShoppingCart from './ShoppingCart.jsx';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [cartVisibilty, setCartVisibilty] = useState(false);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    }
  }, []);

  return (
    <>
      <NavBar token={token} setToken={setToken} cartVisibilty={cartVisibilty} setCartVisibilty={setCartVisibilty} />
      {cartVisibilty? <ShoppingCart setCartVisibilty={setCartVisibilty} /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bagels" element={<AllBagels />} />
          <Route path="/details/:id" element={<GetOneBagel />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
