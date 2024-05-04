import React from "react";
import "./footer.css";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer_container">
        <div className="footr_details_one">
          <h3>Get To Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Bettrx Cares</p>
        </div>
        <div className="footr_details_one">
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footr_details_one forres">
          <h3>Make Money With Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footr_details_one forres">
          <h3>Make Money With Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="lastdetails">
        <img src="./bettrx.png" alt=""></img>
        <p>
          Conditions of Use and Sale Privacy Notice Interest-Based Ads 1996-
          {year}, Bettrx.com,Inc.or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
