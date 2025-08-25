import { useEffect, useState } from 'react';


function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  return (
    <div>
        
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.title} width={100} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;