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
    const searchForBagel = allBagels.filter(bagel => bagel.name.toLowerCase().includes(bagelSearch.toLowerCase()))
    setFilteredBagels(searchForBagel);
  }

  return (
    <div className="all-bagels">
      <h2>Current Stock</h2>
      <form className="search-bar">
        <input placeholder="search bagels" onChange={handleFilter}/>
      </form>
      <section className="all-bagles-main">
      {
        filteredBagels.length === 0 ?
          allBagels.map((singleBagel) => {
              return (
                  <Link to={`/details/${singleBagel.id}`} key={ singleBagel.id } > 
                    <h3>{ singleBagel.name }</h3>
                    <img src={ singleBagel.image } alt="Yummy Bagel" />
                  </Link>
              )
            }) 
          :
          filteredBagels.map((singleBagel) => {
            return (
              <Link to={`/details/${singleBagel.id}`} key={singleBagel.id} >
                <h3>{ singleBagel.name }</h3>
                <img src={ singleBagel.image } alt="Ymmy Bagel" />
              </Link>
            )
          })
        }
      </section>
    </div>
  )
}

export default AllBagels;