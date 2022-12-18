import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./AdminProductItem.css";

const AdminProductItem = ({ item }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    return navigate(`/EditProduct/${item._id}`);
  };

  const [border, setBorder] = useState("");
  const styles = {
    border: border,
  };

  return (
    <div className="product">
      <div>
        <img
          style={styles}
          onMouseEnter={() => {
            setBorder("1px solid #222");
          }}
          onMouseLeave={() => {
            setBorder("");
          }}
          onClick={() => handleProductClick(item)}
          className="productImage"
          src={item.image}
          alt=""
        />
      </div>
      <p>{item.name}</p>
      <p className="price">R${item.price}</p>
    </div>
  );
};

export default AdminProductItem;
