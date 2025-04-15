import { Routes, Route } from 'react-router-dom';
import AllBagels from "./Bagels.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import NavBar from './Navbar.jsx';
import GetOneBagel from "./Details.jsx";
import Login from './Login.jsx';


const App = () => {

  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bagels" element={<AllBagels />} />
          <Route path="/details/:id" element={<GetOneBagel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
