import { useEffect, useState } from "react";
import { useParams } from "react-router";

const GetOneBagel = () => {
  const { id } = useParams();
  const [ singleBagel, setSingleBagel ] = useState({});

  const token = localStorage.getItem('token')

  useEffect(() => {
    const oneBagelDetails = async() => {
      const response = await fetch(`/api/bagels/${id}`);
      const bagelArray = await response.json();
      const oneBagel = bagelArray[0];
      setSingleBagel(oneBagel);
    }
    oneBagelDetails();
  }, []);  

  const handleClick = () => {
    console.log(singleBagel.name);
    console.log(singleBagel.image);
    console.log(singleBagel.price);
  }

  return (
    <> 
      <div className="one-bagel">
        <section className="one-bagel-main">
          <h2>{ singleBagel.name }</h2>
          <img src={ singleBagel.image } alt="A tasty Bagel"/>
          <p>{ singleBagel.description }</p>
          <h3>Price: ${ singleBagel.price / 100 }</h3>
          {token ? <button onClick={handleClick}>Add to Cart</button> : null}
        </section>
      </div>
    </>
  )
}

export default GetOneBagel;