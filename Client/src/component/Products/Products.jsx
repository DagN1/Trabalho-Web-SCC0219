import React from "react";
import Product from "../Product/Product";

const Products = ({ products, onAdd }) => {

  return (
    //para cada um dos products vai renderizar um componet product

    <>
      {products.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd}/>
      ))}
    </>
  );
};

export default Products;
