import React from "react";
import image from "../assets/image/cikeyshop.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white">
        <img src={image} className="card-img" alt="background" />
        <div className="card-img-overlay d-flex flex-column justyfy-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW PRODUCTS</h5>
            <p className="card-text lead fs-2">
            Hurry up to order to receive up to 50% discount and get a discount voucher for your next purchase
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
