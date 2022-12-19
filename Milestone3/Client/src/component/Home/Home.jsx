import React from "react";
import { useNavigate } from "react-router-dom";
import homePageImage from "../../images/mainpage.png";
import Products from "../Products/Products";

import "./Home.css";

const Home = ({ products, onAdd }) => {
  const navigate = useNavigate();

  const handleBannerClick = () => {
    return navigate("/shoppingPage");
  };

  return products === undefined ? (<></>) : (
    <>
      <div className="hero" onClick={handleBannerClick}>
        <img className="img-menu" src={homePageImage} />
      </div>
      <div class="new-arrivals">
        <p>New Arrivals</p>
      </div>
      <div className="products">
        <Products products={products} onAdd={onAdd} />
      </div>
    </>
  );
};

export default Home;
