import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBagels = () => {
  const [ allBagels, setAllBagels ] = useState([]);

  useEffect(() => {
    const getAllBagels = async() => {
      const response = await fetch('/api/bagels');
      const allTheBagels = await response.json();
      setAllBagels(allTheBagels);
    }
    getAllBagels();
  }, []);
  console.log(allBagels);

  return (
    allBagels.map((singleBagel) => {
      return ( 
        <Link to={`/api/bagels/${singleBagel.id}`} key={ singleBagel.id } > 
          <h3>{ singleBagel.name }</h3>
          <img src={ singleBagel.image } alt="Yummy Bagel" />
        </Link>
      )
    })
  )
}

export default AllBagels;