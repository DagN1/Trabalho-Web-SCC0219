import React from "react";
import "./MainItem.css";
import productImage from "../../images/unsplash_uhzMXsQ7hBA.png";
import cartImage from "../../images/cart.png";
import { useNavigate } from "react-router-dom";

const MainItem = ({product, onAdd}) => {

  const navigate = useNavigate()
	
	function importAll(r) {
		return r.keys().map(r);
	  }

  const handleAddToCart = () => {
    onAdd(product)
    navigate("/shoppingCart")
  }
	  
	const images = importAll(require.context('../../images/productsImages/', false, /\.(png|jpe?g|svg)$/));

	return (
    <div className="products main-view">
          <div className="main-product">
            <div><img className="image-main" src={product.image} alt="" /></div>
            <p>{product.name}</p>
            <p className="price">R${product.price}</p>
            <button className="addCart" onClick={() => handleAddToCart()}>
                <img src={cartImage} alt="" />
                <p>Add to Cart</p>
            </button>
          </div>
          <div className="item-info">
            <p className="text item-description">{product.description}</p>
            <p className="text">Stock: {product.stock}</p>
          </div>
      </div>
  );
};

export default MainItem;
