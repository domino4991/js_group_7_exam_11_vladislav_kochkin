import React from 'react';
import './ProductItem.css';
import PropTypes from 'prop-types';
import {apiUrl} from "../../../../constants";
import {NavLink} from "react-router-dom";

const ProductItem = ({image, id, title, price}) => {
    const path = apiUrl + '/uploads/' + image;
    return (
        <NavLink
            to={`/products/${id}`}
            className="Products-item"
        >
            <div className="Products-item__img-box">
                <img
                    src={path}
                    alt={title}
                    className="Products-item__img"
                />
            </div>
            <div className="Products-item__content">
                <h4
                    className="Products-item__title"
                >
                    {title}
                </h4>
                <p className="Products-item__price">{price} <span>сом</span></p>
            </div>
        </NavLink>
    );
};

ProductItem.propTypes = {
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default ProductItem;