import React from 'react';
import './CategoriesItem.css';
import PropTypes from 'prop-types';
import {getProducts} from "../../../../store/actions/productActions";
import {useDispatch} from "react-redux";

const CategoriesItem = ({title, id}) => {
    const dispatch = useDispatch();
    return (
        <li className="Categories-item__list-item">
            <button
                onClick={() => dispatch(getProducts(id))}
                className="Categories-item__list-btn"
                type="button"
            >
                {title}
            </button>
        </li>
    );
};

CategoriesItem.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default CategoriesItem;