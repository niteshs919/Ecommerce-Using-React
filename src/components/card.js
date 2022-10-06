import React from "react";
import "../styles/card.css";
import {MdAddShoppingCart} from 'react-icons/md'
import {FaRupeeSign} from 'react-icons/fa'
import {AiOutlineDelete} from 'react-icons/ai'


const Cards = ({ item, handleClick,handledelete}) => {
  const { title, description, price, img ,id} = item;
  return (
    <div className="cards">
      <div className="image_box">
      <i onClick={() => handledelete(id)} className="Delete"><AiOutlineDelete ></AiOutlineDelete></i>
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h1>{title}</h1>
        <p>{description}</p>
        <p className="price">Price - {price}<FaRupeeSign/></p>
        <button onClick={() => handleClick(item)}>Add to Cart<MdAddShoppingCart/></button>
      </div>
    </div>
  );
};

export default Cards;
