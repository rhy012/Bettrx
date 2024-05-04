import React from "react";
import "./buynow.css";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./right";
import { Divider } from "@mui/material";
const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className="leftbuyprice">Price</span>
          <Divider />

          <div className="item_containert">
            <img
              src="https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="item_image"
            ></img>
            <div className="item_details">
              <h3>Molife Sense 500 Smartwatch(Black Strap, Freesize)</h3>
              <h3>Smart Watches</h3>
              <h3 className="diffrentprice">Rs.4049.00</h3>
              <p className="unusuall">Usually dispatched in 8 days</p>
              <p>Eligible for free Shipping</p>
              <img src="" alt=""></img>
              <Option />
            </div>
            <h3 className="item_price">Rs.4049.00</h3>
          </div>
          <Divider />
          <Subtotal />
        </div>
        <Right />
      </div>
    </div>
  );
};

export default Buynow;
