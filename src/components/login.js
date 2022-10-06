import React, { useState } from "react";
import MainApp from "./MainApp";

const Login = ({ setfirst ,data , setData , product, setproduct}) => {
  const [emaillog, setEmaillog] = useState("");

  const [passwordlog, setPasswordlog] = useState("");

  const [flag, setFlag] = useState("");

  const [home, setHome] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false); 
      setfirst(false);
    }
  };

  return (
    <>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>Login</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email" 
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && <p>Please Fill correct Data </p>}
        </form>
      ) : (
        <>
          <MainApp data={data}
              setData={setData}
              product={product}
              setproduct={setproduct}/>
        </>
      )}
    </>
  );
};

export default Login;
