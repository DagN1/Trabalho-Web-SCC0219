import React from "react";
import EditProduct from "../EditProduct/EditProduct";
import { Route, Routes } from 'react-router-dom';

const EditPage = ({ productList }) => {
  console.log(productList);
  return (
    <>
        <Routes>
            
            {productList.map((product) => (<Route 
                path={product._id} element={
                  <EditProduct product={product} />
                }
            />))}
        </Routes>
      
    </>
  );
};

export default EditPage;
