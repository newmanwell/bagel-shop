import { useEffect, useState } from "react";
import { useParams } from "react-router";

const GetOneBagel = () => {
  const { id } = useParams();
  const [ singleBagel, setSingleBagel ] = useState({});
  const [addToCart, setAddToCart] = useState([]);
  const token = localStorage.getItem('token');

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
    const bagelName = singleBagel.name;
    const bagelPrice = singleBagel.price / 100;
    const bagelImage = singleBagel.image;

    setAddToCart([...addToCart, {name: bagelName, price: bagelPrice, image: bagelImage, quanity: 1}]);
    const stringifiedCart = JSON.stringify(addToCart);
    console.log(stringifiedCart);

    localStorage.setItem("bagelCart", stringifiedCart);
  }
  console.log(addToCart);

  return (
    <> 
      <div className="one-bagel">
        <section className="one-bagel-main">
          <h2>{ singleBagel.name }</h2>
          <img src={ singleBagel.image } alt="A tasty Bagel"/>
          <p>{ singleBagel.description }</p>
          <h3>Price: ${ singleBagel.price / 100 }</h3>
          {token ? <button onClick={handleClick} className="add-to-cart">Add to Cart</button> : null}
        </section>
      </div>
    </>
  )
}

export default GetOneBagel;