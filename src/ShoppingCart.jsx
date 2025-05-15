const ShoppingCart = ({setCartVisibilty}) => {
  const handleClose = () => {
    setCartVisibilty(false);
  }

  return (
    <section className="cart-container">
      <div className="items-container">
        <h2>Shopping Cart</h2>
        <button onClick={handleClose}>Close Cart</button>
      </div>
    </section>
  )
}

export default ShoppingCart;