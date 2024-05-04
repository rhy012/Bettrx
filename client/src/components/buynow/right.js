import React from "react";

const right = () => {
  return (
    <div className="right_buy">
      <img
        src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="right_image"
      ></img>
      <div className="cost_right">
        <p>Your Order is Eligible For Free Delivery.</p>
        <br />
        <span style={{ color: "#565959" }}>
          Select this option at Checkout. Details
        </span>
        <h3>
          Subtotal (1 items):{" "}
          <span style={{ fontWeight: 700 }}>Rs.4049.00</span>
        </h3>
        <button className="rightbuy_btn">Process To Buy</button>
        <div className="emi">Emi Available</div>
      </div>
    </div>
  );
};

export default right;
