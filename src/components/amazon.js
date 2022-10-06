import React from "react";
import Cards from "./card";
import "../styles/amazon.css";


const Amazon = ({ handleClick, product ,handledelete}) => {
  return (
    <section>
      {product.map((item) => ( // data is in product with the help state
        <Cards key={item.id} item={item} handleClick={handleClick} handledelete={handledelete} />
      ))}                 
    </section>     // item is value of product 
  );
};

export default Amazon;