import React from "react";
import EditProduct from "../EditProduct/EditProduct";

const EditPage = ({ productList }) => {
  return (
    <>
      {productList?.productList?.data?.map((product) => (
        <EditProduct key={product._id} product={product} />
      ))}
    </>
  );
};

export default EditPage;
