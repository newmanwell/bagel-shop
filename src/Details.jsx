import { useEffect, useState } from "react";
import { useParams } from "react-router";
const addToCart = [];

const GetOneBagel = () => {
  const { id } = useParams();
  const [ singleBagel, setSingleBagel ] = useState({});
  const [quantity, setQuantity] = useState(1);
  const token = localStorage.getItem('token');
  console.log(quantity);

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

    addToCart.push({name: bagelName, price: bagelPrice, image: bagelImage, quantity: quantity});
    const stringifiedCart = JSON.stringify(addToCart);
    localStorage.setItem("bagelCart", stringifiedCart);
  }

  return (
    <> 
      <div className="one-bagel">
        <section className="one-bagel-main">
          <h2>{ singleBagel.name }</h2>
          <img src={ singleBagel.image } alt="A tasty Bagel"/>
          <p>{ singleBagel.description }</p>
          <h3>Price: ${ singleBagel.price / 100 }</h3>
          <div>
              <label for="bagel-count">Quanity: </label>
              <input 
                onChange={(event) => setQuantity(event.target.value)}
                type="number" 
                id="bagel-count"
                name="Quantity"
                min="1"
                max="10" 
              />
          </div>
          {token ? <button onClick={handleClick} className="add-to-cart">Add to Cart</button> : null}
        </section>
      </div>
    </>
  )
}

export default GetOneBagel;