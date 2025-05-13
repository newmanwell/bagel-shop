import { useEffect, useState } from "react";
import { Link } from "react-router";

const AllBagels = () => {
  const [allBagels, setAllBagels] = useState([]);
  const [filteredBagels, setFilteredBagels] = useState([]);

  useEffect(() => {
    const getAllBagels = async() => {
      const response = await fetch('/api/bagels');
      const allTheBagels = await response.json();
      setAllBagels(allTheBagels);
    }
    getAllBagels();
  }, []);
  console.log(allBagels);
  console.log(filteredBagels);

  const handleFilter = (event) => {
    const bagelSearch = event.target.value;
    const searchForBagel = allBagels.filter(bagel => bagel.name.includes(bagelSearch))
    setFilteredBagels(searchForBagel);
  }

  return (
    <div className="all-bagels">
      <h2>Current Stock</h2>
      <form>
        <input placeholder="search bagels" onChange={handleFilter}/>
        <button>Search</button>
      </form>
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