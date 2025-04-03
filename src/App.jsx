import AllBagels from "./Bagels.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import { Routes, Route } from 'react-router-dom';
import NavBar from './Navbar.jsx';
import GetOneBagel from "./Details.jsx";

const App = () => {

  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bagels" element={<AllBagels />} />
          <Route path="/details/:id" element={<GetOneBagel />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
