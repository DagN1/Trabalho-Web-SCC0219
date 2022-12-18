import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cartImage from "../../images/cart.png";

import "./Product.css"

const Product = ({product, onAdd }) => {
    const navigate = useNavigate()
    
    const handleProductClick = () => {
        return(
            navigate(`/productDetails/${product.id}`)
        )
    }

    function importAll(r) {
		return r.keys().map(r);
	  }
	  
	const images = importAll(require.context('../../images/productsImages/', false, /\.(png|jpe?g|svg)$/));

    const [border, setBorder] = useState("");
    const styles = {
        border: border
    };

    return (
        <div 
            className="product" 
            >
            <div>
                <img style={styles} 
            onMouseEnter={() => {setBorder("1px solid #222")}} 
            onMouseLeave={() => {setBorder("")}}
            onClick={handleProductClick}  className="productImage" src={images[product.img]} alt="" />
            </div>
            <p>{product.title}</p>
            <p className="price">R${product.price}</p>
            <button className="addCart" onClick={() => onAdd(product)}>
                <img src={cartImage} alt="" />
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;