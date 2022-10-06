import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);    // here price is calculate 

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);        // cart array update after handleRemove func calling 
    handlePrice();     // after remove the product in a cart price will update.
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.quantity * item.price));  // Clicking product cost is store in ans and it show by price state.
    setPrice(ans);    // ans is storing the item price(all item)
  };

  useEffect(() => {
    handlePrice();     // price is updating on every rendering.
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.quantity}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>    {/* here only show item price*/}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>   {/* Here Overall price will show and it can updatable */}
      </div>
    </article>
  );
};

export default Cart;
