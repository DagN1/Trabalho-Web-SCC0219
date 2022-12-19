import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainItem from '../MainItem/MainItem';
import Product from '../Product/Product';

const ProductDetails = ({products, onAdd}) => {
    const currentProduct = window.location.pathname.split("/").pop();
    
    return ( 
        <>
            <Routes>
            
                {products.map((product) => (<Route 
                    path={product._id} element={
                        <MainItem product={product} onAdd={onAdd}/>
                    }
                />))}
            </Routes>
        </>
    );
}
 
export default ProductDetails;