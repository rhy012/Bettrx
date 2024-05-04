import React from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Sign_in = () => {
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });
  const adddata = (e) => {
    const { name, value } = e.target;
    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };
  return (
    <>
      <section style={{ minHeight: "100vh" }}>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./bettrx.png" alt="bettrxlogo"></img>
          </div>
          <div className="sign_form">
            <form>
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={logdata.email}
                  name="email"
                  id="email"
                ></input>
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={logdata.password}
                  name="password"
                  id="password"
                  placeholder="At least 6 character"
                ></input>
              </div>
              <button className="signin_btn">Continue</button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New To Bettrx</p>
            <NavLink to="/register">
              <button>Create Your Bettrx Account</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign_in;
