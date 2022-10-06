import React  from "react";
import { NavLink } from "react-router-dom";


const Logout = ({ first, setfirst }) => {

  return <>
  {setfirst(true)}
  <NavLink to="/login"> Do You Want to Logout</NavLink>
  </>;
};

export default Logout;
