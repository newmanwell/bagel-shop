import { useState } from "react";

const ShoppingCart = ({setCartVisibilty}) => {
  const getCart = localStorage.getItem("bagelCart");
  const [parsedCart, setParsedCart] = useState(JSON.parse(getCart));
  const [checkedOut, setCheckedOut] = useState(null);
  console.log(parsedCart);

  const handleClose = () => {
    setCartVisibilty(false);
  }

  const handleRemove = (bagelName) => {
    const indexToRemove = parsedCart.findIndex(passedInName => passedInName.name === bagelName);
    const newBagelArray = [...parsedCart.slice(0, indexToRemove), ...parsedCart.slice(indexToRemove + 1)];
    localStorage.setItem("bagelCart", JSON.stringify(newBagelArray));
    setParsedCart(newBagelArray);
  }

  
  const updateTotal = () => {
    let currentTotal = 0;
    for (let i = 0; i < parsedCart.length; i++) {
      currentTotal = currentTotal + (parsedCart[i].price * parsedCart[i].quantity);
    }

    return currentTotal;
  }

  const handleCheckout = () => {
    setCheckedOut("Thank You For Your Order");
    setParsedCart([]);
  }

  return (
    <section className="cart-container">
      <div className="items-container">
        <h2>Shopping Cart</h2>
        <button onClick={handleClose}>Close Cart</button>
        <h3>Order Total: ${updateTotal()}</h3>
        <button onClick={handleCheckout}>Checkout</button>
        <h3>{checkedOut}</h3>
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