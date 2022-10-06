import React, { useState } from "react";
import Amazon from "./amazon";
import Navbar from "./navbar";
import Cart from "./cart";

const MainApp = ({ product, setproduct }) => {
  const [show, setShow] = useState(true);  // it will render all product on true and cart on false
  const [cart, setCart] = useState([]);    // it store the selected product(add to cart)

  const handleClick = (item) => {    
    if (cart.indexOf(item) !== -1) {         // if item index is found in cart it show alert 
      alert("You have already added the product");
      return;
    }
    setCart([...cart, item]);         // if item index not found them it will add in a cart
  };

  const handledelete = (id) => {                   // it will delete the product      
    const arr = product.filter((item) => item.id !== id);  // if item id not match then add in array.
    setproduct(arr);                  // not match item will add in a array                         
  };

  const handleChange = (item, d) => {     // d is +1 on add and -1 on del
    const ind = cart.indexOf(item);       // it find index of selected product.
    const arr = cart;                 // selected product store in a arr
    arr[ind].quantity += d;         // here item quantity will set.

    if (arr[ind].quantity === 0) arr[ind].quantity = 1;   
    setCart([...arr]);          // here with the help of index quantity will update
  };

  return (
    <>
      <Navbar setShow={setShow} size={cart.length} />
      {/*cart.lenght shows the no of item in cart*/}

      {/* When setshow is true Amazon component will call*/}
      {show ? (
        <Amazon                       
          product={product}                    
          handleClick={handleClick}
          handledelete={handledelete}
        />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )} {/* When setshow is false cart component will call*/}
    </>
  );
};

export default MainApp;
