import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar1";
import Register from "./components/register";
import Login from "./components/login";
import Logout from "./components/Logout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductForm from "./components/productForm";
import list from "./components/data";
import MainApp from "./components/MainApp";

const App = () => {
  const [product, setproduct] = useState(list);   // Original data in list

  const [data, setData] = useState({   // 
    id: "",
    title: "",
    discription: "",
    price: "",
    img: "",
    quantity: 1,
  });

  const [first, setfirst] = useState(true);

  const [fid , setid] = useState(11)   // On productForm it show the update id because of key props

  return (
    <>
      <Navbar first={first} product={product} setproduct={setproduct}/>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route
          path="/login"
          element={<Login data={data}
              setData={setData}
              product={product}
              setproduct={setproduct}
              setfirst={setfirst}
              />}
        />
        <Route
          path="/logout"
          element={<Logout first={first} setfirst={setfirst} />}
        />
        <Route
          path="/productform"
          element={
            <ProductForm
              data={data}
              setData={setData}
              product={product}
              setproduct={setproduct}
              first={first}
              setfirst={setfirst}
              fid= {fid}
              setid={setid}
            />
          }
        />
        <Route
          path="/mainapp"
          element={<MainApp first={first} setfirst={setfirst}  data={data}
              setData={setData}
              product={product}
              setproduct={setproduct}/>}
        />
      </Routes>
    </>
  );
};

export default App;
