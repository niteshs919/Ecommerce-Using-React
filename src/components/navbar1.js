import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar1.css";
import list from "./data";
import {FiShoppingCart} from 'react-icons/fi'
import {MdAddShoppingCart} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import {FiLogIn} from 'react-icons/fi'

 
const Navbar = ({ first, product, setproduct }) => {
  const [input, setinput] = useState("");

  const [pro, setpro] = useState(list);

  const search = () => {
    product
      .filter((val) => {
        const valTitle = (val.title).toLowerCase();
        const valTitle1 = (val.title).toUpperCase();
        return ( valTitle || valTitle1 ) === input;
      })
      .map((val1) => {  
        return setproduct([val1]);
        // console.log([val1]);
      });
  };

  const reset = () => {
    setproduct(pro);
    setinput("");
    // input(" ");
    //console.log("---");
  };

  return (
    <>
      <nav className="nav1">
        <ul>
          {first && (
            <>
              <li className="nav-item1">
                <NavLink to="/">Register</NavLink>
              </li>
              <li className="nav-item1">
                <NavLink to="/login">Login <FiLogIn/></NavLink>
              </li>
            </>
          )}
          {first || (
            <>
              <div className="Navbar">
                <ul className="name">Company Name</ul>
                <FiShoppingCart size="30"/>
                <li className="nav-item4">
                  <input
                    placeholder="Search Product"
                    type="text"
                    className="input"
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                  />
                </li>
                <li>
                  <button onClick={() => search()} className="search">Search</button>
                </li>
                <li>
                  <button onClick={() => reset()}  className="search">Reset</button>
                </li>
                <li className="nav-item3">
                  <NavLink to="/productform">Add a Product<MdAddShoppingCart size="24"/></NavLink>
                </li>
                <li className="nav-item2">
                  <NavLink to="/logout">Logout <FiLogOut size="24"/></NavLink>
                </li>
              </div>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
