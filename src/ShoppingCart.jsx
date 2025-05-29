import { useState } from "react";

const ShoppingCart = ({setCartVisibilty}) => {
  const getCart = localStorage.getItem("bagelCart");
  const [parsedCart, setParsedCart] = useState(JSON.parse(getCart));
  console.log(parsedCart);

  const handleClose = () => {
    setCartVisibilty(false);
  }

  const handleRemove = (bagelName) => {
    const indexToRemove = parsedCart.findIndex(passedInName => passedInName.name === bagelName);
    const newBagelArray = [...parsedCart.slice(0, indexToRemove), ...parsedCart.slice(indexToRemove + 1)];
    setParsedCart(newBagelArray);
    localStorage.setItem("bagelCart", JSON.stringify(newBagelArray));
  }

  return (
    <section className="cart-container">
      <div className="items-container">
        <h2>Shopping Cart</h2>
        <button onClick={handleClose}>Close Cart</button>
        {
          parsedCart ? 
          parsedCart.map((cartBagel) => {
            return (
              <section className="cart-bagel">
                <h3>{cartBagel.name}</h3>
                <img src={cartBagel.image} alt="Bagel In Cart"/>
                <p>${cartBagel.price}</p>
                <p>Quantity: {cartBagel.quantity}</p>
                <h3>Subtotal: ${cartBagel.price * Number(cartBagel.quantity)}</h3>
                <button onClick={() => handleRemove(cartBagel.name)}>Remove</button>
              </section>
            ) 
          })
          :
          null
        }
      </div>
    </section>
  )
}

export default ShoppingCart;