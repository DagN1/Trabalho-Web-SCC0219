import React from "react";
import { useNavigate } from "react-router-dom";
import homePageImage from "../../images/mainpage.png";
import Products from "../Products/Products";

import "./Home.css"

const Home = ({products, onAdd}) => {
	const navigate = useNavigate();

	const handleBannerClick = () => {
		return(
			navigate("/shoppingPage")
		)
	}

    return (
        <>
            <div className="hero" onClick={handleBannerClick}>
                <img className="img-menu" src={homePageImage} />
            </div>
            <div class="new-arrivals">
                <p>New Arrivals</p>
            </div>
            <div className="products">
              <Products products={products} onAdd={onAdd}/>
            </div>
        </>
    );
};

export default Home;
/*
<div class="hero">
      <img class="img-menu" src="Group 6.png"/>
    </div>
    <div class="new-arrivals">
      <p>New Arrivals</p>
    </div>
    <div class="products">
      <div class="product">
        <div><img src="./unsplash_uhzMXsQ7hBA.png" alt="" /></div>
        <p>Generic Blue Jeans</p>
        <p class="price">$99999.99</p>
        <a href="https://www.google.com/">
          <img src="./Shopping cart.png" alt="" />
          <p>Add to Cart</p>
        </a>
      </div>
      <div class="product">
        <div><img src="./unsplash_uhzMXsQ7hBA.png" alt="" /></div>
        <p>Generic Blue Jeans</p>
        <p class="price">$99999.99</p>
        <a href="https://www.google.com/">
          <img src="./Shopping cart.png" alt="" />
          <p>Add to Cart</p>
        </a>
      </div>
      <div class="product">
        <div><img src="./unsplash_uhzMXsQ7hBA.png" alt="" /></div>
        <p>Generic Blue Jeans</p>
        <p class="price">$99999.99</p>
        <a href="https://www.google.com/">
          <img src="./Shopping cart.png" alt="" />
          <p>Add to Cart</p>
        </a>
      </div>
      <div class="product">
        <div><img src="./unsplash_uhzMXsQ7hBA.png" alt="" /></div>
        <p>Generic Blue Jeans</p>
        <p class="price">$99999.99</p>
        <a href="https://www.google.com/">
          <img src="./Shopping cart.png" alt="" />
          <p>Add to Cart</p>
        </a>
      </div>
      <div class="product">
        <div><img src="./unsplash_uhzMXsQ7hBA.png" alt="" /></div>
        <p>Generic Blue Jeans</p>
        <p class="price">$99999.99</p>
        <a href="https://www.google.com/">
          <img src="./Shopping cart.png" alt="" />
          <p>Add to Cart</p>
        </a>
      </div>
    </div>*/
