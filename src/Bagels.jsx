import { useEffect, useState } from "react";
import { Link } from "react-router";

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
  

  return (
    <div className="all-bagels">
      <h2>Current Stock</h2>
      <section className="all-bagles-main">
      {
      allBagels.map((singleBagel) => {
          return (
              <Link to={`/details/${singleBagel.id}`} key={ singleBagel.id } > 
                <h3>{ singleBagel.name }</h3>
                <img src={ singleBagel.image } alt="Yummy Bagel" />
              </Link>
          )
        })
        }
      </section>
    </div>
  )
}

export default AllBagels;