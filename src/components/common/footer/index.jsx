import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="zomato-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <ul>
              <li>About Zomato</li>
              <li>Culture</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Discover</h5>
            <ul>
              <li>Restaurants</li>
              <li>Reviews</li>
              <li>Delivery</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p>&copy; 2024 Zomato. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
