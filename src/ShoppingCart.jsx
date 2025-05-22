const ShoppingCart = ({setCartVisibilty}) => {
  const getCart = localStorage.getItem('bagelCart');
  const parsedCart = JSON.parse(getCart);
  console.log(parsedCart);

  const handleClose = () => {
    setCartVisibilty(false);
  }

  return (
    <section className="cart-container">
      <div className="items-container">
        <h2>Shopping Cart</h2>
        <button onClick={handleClose}>Close Cart</button>
        {
          parsedCart.map((cartBagel) => {
            return (
              <section>
                <h3>{cartBagel.name}</h3>
                <img src={cartBagel.image} alt="Bagel In Cart"/>
                <p>{cartBagel.price}</p>
              </section>
            )
          })
        }
      </div>
    </section>
  )
}

export default ShoppingCart;