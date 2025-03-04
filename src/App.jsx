import AllBagels from "./Home.jsx";
import { Routes, Route } from 'react-router-dom';
import NavBar from './Navbar.jsx';
import GetOneBagel from "./Details.jsx";

const App = () => {

  return (
    <>
    <NavBar />

      <h1>Bagel Shop</h1>
      <div>
        <Routes>
          <Route path="/" element={<AllBagels />} />
          <Route path="/details/:id" element={<GetOneBagel />} />
        </Routes>
      </div>
    </>
  )
}

export default App
