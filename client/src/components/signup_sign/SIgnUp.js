import React from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const SIgnUp = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  const adddata = (e) => {
    const { name, value } = e.target;
    setUdata(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
  };
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./bettrx.png" alt="bettrxlogo"></img>
          </div>
          <div className="sign_form">
            <form>
              <h1>Sign-Up</h1>
              <div className="form_data">
                <label htmlFor="fname">Your Name</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={udata.fname}
                  name="fname"
                  id="fname"
                ></input>
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={udata.email}
                  name="email"
                  id="email"
                ></input>
              </div>
              <div className="form_data">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="number"
                  onChange={adddata}
                  value={udata.mobile}
                  name="mobile"
                  id="mobile"
                ></input>
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={udata.password}
                  name="password"
                  id="password"
                  placeholder="At least 6 character"
                ></input>
              </div>
              <div className="form_data">
                <label htmlFor="cpassword">Password Again</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={udata.cpassword}
                  name="cpassword"
                  id="cpassword"
                  placeholder=""
                ></input>
              </div>
              <button className="signin_btn">Continue</button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Signin</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SIgnUp;
