import React from 'react';
import './ProductsItems.css';
import PropTypes from 'prop-types';
import ProductItem from "./ProductItem/ProductItem";

const ProductsItems = ({products}) => {
    return (
        <div className="Products-items">
            {products && products.map(product => <ProductItem
                key={product._id}
                image={product.image}
                price={product.price}
                id={product._id}
                title={product.title}
            />)}
        </div>
    );
};

ProductsItems.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductsItems;