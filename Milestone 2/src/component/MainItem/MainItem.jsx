import React from "react";
import "./MainItem.css";
import productImage from "../../images/unsplash_uhzMXsQ7hBA.png";

const MainItem = ({product}) => {
	
	function importAll(r) {
		return r.keys().map(r);
	  }
	  
	const images = importAll(require.context('../../images/productsImages/', false, /\.(png|jpe?g|svg)$/));

	console.log(product.img)
	return (
    <div className="products main-view">
          <div className="main-product">
            <div><img className="image-main" src={images[product.img]} alt="" /></div>
          </div>
          <div className="item-info">
            <p>{product.title}</p>
            <p className="text item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm</p>
            <p className="text">Size:<span className="item-size">jhjh</span></p>
            <p className="text">Color:<span className="item-color">kjghjkhgjk</span></p>
            <p className="price">R${product.price}</p>
            <a href="https://www.google.com/">
              <img src="./Shopping cart.png" alt="" />
              <p>Buy</p>
            </a>
          </div>
      </div>
  );
};

export default MainItem;
