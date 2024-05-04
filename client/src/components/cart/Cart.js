import React from "react";
import "./cart.css";
import { Divider } from "@mui/material";
const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src="" alt="cart_image"></img>
          <div className="cart_btn">
            <button className="cart_btn1">Add To Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Fitness Gear</h3>
          <h4>Pigeon Favourite Electric Kettle(1.5 L, Silver, Black)</h4>
          <Divider />
          <p className="mrp">M.R.P : Rs.1195</p>
          <p>
            Deal of the Day :<span style={{ color: "#B12704" }}>Rs.625.00</span>
          </p>
          <p>
            You Save :<span style={{ color: "#B12704" }}>Rs.570.00</span>(47%)
          </p>

          <div className="discount_box">
            <h5>
              Discount : <span style={{ color: "#111" }}>Extra 10% Off</span>
            </h5>
            <h4>
              Free Delivery
              <span style={{ color: "#111", fontWeight: 600 }}>
                {" "}
                Oct 8 -21{" "}
              </span>
              Details
            </h4>
            <p>
              Fastest Delivery:{" "}
              <span style={{ color: "#111", fontWeight: 600 }}>
                Tomorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">
            About the Item :{" "}
            <span
              style={{
                color: "#565959",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: 0.4,
              }}
            >
              This electric kettle from the Pigeon will soon become a
              househelper for you and your housemates making your life warm and
              smoothy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
