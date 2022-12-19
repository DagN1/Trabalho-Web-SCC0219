import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Products/Products';

const Search = ({products, onAdd}) => {
    let { searchParam } = useParams();

    const searchResult = products.filter((product) => (product.name.toLowerCase().includes(searchParam.toLowerCase())));

    return ( 
        <Products products={searchResult} onAdd={onAdd} />
     );
}
 
export default Search;