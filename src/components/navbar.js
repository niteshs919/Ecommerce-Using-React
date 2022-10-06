import React from "react";
import "../styles/navbar.css";
import {FaShoppingBag} from 'react-icons/fa'
import {BsCartPlus} from 'react-icons/bs'

const Navbar = ({ setShow, size }) => {
  
  return (
    <>
    <nav>
     <div className="nav_box">         
        <span className="my_shop" onClick={() => setShow(true)}> 
          Shoping Cart <FaShoppingBag size="35"/>     {/*  Here Amazon component will call */}
        </span>
        <div className="cart" onClick={() => setShow(false)}> {/*  Here cart component will call */}
          <span>
          <BsCartPlus size="40"/>            
          </span>                  
          <span>{size}</span>    
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
  



