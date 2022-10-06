import React from "react";

import { NavLink } from "react-router-dom";
import "../styles/productform.css";
import {FiShoppingCart} from 'react-icons/fi';


const ProductForm = ({ product, setproduct, data, setData , fid , setid }) => {


  const addProd = () => {

    setproduct([...product, data]);    // after this enter detail will add as a product in product state
   // console.log(product);
     setid(fid+1)     //  it show id in increasing order on every submit.
     alert("Product is added" , {delprod})   // it show alert.
  };

  const handleSubmit = (e) => {  // it calls on every change
    e.preventDefault();      // it prevent from refresh on submit button will call

    setData({            // append the input data by different value by name attribute
      ...data,            // here key is present in app component for every input
      [e.target.name]: e.target.value,  // name attribute can store the different value in one state.
    });
  };

  const delprod = ( ) =>{   // after click on go to cart - all field are empty.

    data.id="";
    data.title="";
    data.discription="";
    data.price="";
    data.img=""; 
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
      <h3>Enter Id number {fid} </h3>
        <div className="row">
          <input
            placeholder="Enter the Id"
            name="id"
            value={data.id} 
            type="number"
            onChange={handleSubmit}
          />
          <input
            placeholder="Enter the mobile name"
            value={data.title}
            type="text"
            name="title"
            onChange={handleSubmit}
          />
          <input
            placeholder="Enter the mobile color"
            value={data.discription}
            type="text"
            name="discription"
            onChange={handleSubmit}
          />
          <input
            placeholder="Enter the mobile price"
            value={data.price}
            name="price"
            type="number"
            onChange={handleSubmit}
          />
          <input
            placeholder="Enter the image URL"
            value={data.img}
            name="img"
            type="url"
            onChange={handleSubmit}
          />
          <input
            placeholder="Product Quantity"
            value={data.quantity}
            name="quantity"
            type="text"
            onChange={handleSubmit}
          />
          <button onClick={addProd} className="abc">Save</button>
          {/* <NavLink to="/mainapp" onClick={delprod} className="abc">Submit</NavLink> */}
          <NavLink to="/mainapp" onClick={delprod} className="abc">Go to shoping cart<FiShoppingCart size="30"/></NavLink>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
