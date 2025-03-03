import AllBagels from "./Home.jsx";
import { Routes, Route } from 'react-router-dom';
import NavBar from './Navbar.jsx';

const App = () => {

  return (
    <>
    <NavBar />

      <h1>Bagel Shop</h1>
      <div>
        <Routes>
          <Route path="/" element={<AllBagels />} />
        </Routes>
      </div>
    </>
  )
}

export default App
