import React, { useState } from "react";

import Login from "./login";

const Register = () => {

    // It is for name input
    const [name, setName] = useState("");

    const InputName = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    }   

    // It is for Email input
    const [email, setEmail] = useState()

    const InputEmail = (e) => {
        setEmail(e.target.value)
    }

    // It is for password input
    const [password, setPassword] = useState()

    const InputPassword = (e) => {
        setPassword(e.target.value)
    }

    // It is for phone number input
    const [phone, setPhone] = useState("")

    const InputPhoneNo = (e) => {
        setPhone(e.target.value)
    }

    const [flag, setFlag] = useState(false)

    const [login, setLogin] = useState(true)

    // this is func will call when user click on submit button
    const FormSubmit = (e) => {
        e.preventDefault();   // Form not refresh automatic when you submit.


        if (!name || !email || !password || !phone) {
            setFlag(true);
        }

        else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));

            setLogin(!login);
        }
    }   

    const handleClick = () => {
        setLogin(!login);
    }
    return (
        <>
            {login ? (
                <form onSubmit={FormSubmit}>
                    <h1>Registration</h1>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"  
                            className="form-control"
                            placeholder="Enter full name"
                            onChange={InputName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={InputEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={InputPassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone. No</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Contact No"
                            onChange={InputPhoneNo}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                    <p onClick={handleClick}>Already Registered {" "} login in ?</p>

                    {flag && (
                        <p>Please fill all the details</p>
                    )}
                </form>
            ) : (
                <Login />
            )}
        </>
    );
};

export default Register;

