import React from 'react';
import './CategoriesItems.css';
import PropTypes from 'prop-types';
import CategoriesItem from "./CategoriesItem/CategoriesItem";
import {useDispatch} from "react-redux";
import {getProducts} from "../../../store/actions/productActions";

const CategoriesItems = ({categories}) => {
    const dispatch = useDispatch();
    return (
        <div className="Categories-items">
            <ul className="Categories-items__list">
                <li className="Categories-item__list-item">
                    <button
                        onClick={() => dispatch(getProducts())}
                        className="Categories-item__list-btn"
                        type="button"
                    >
                        Всё
                    </button>
                </li>
                {categories && categories.map(category => <CategoriesItem
                    key={category._id}
                    id={category._id}
                    title={category.title}
                />)}
            </ul>
        </div>
    );
};

CategoriesItems.propTypes = {
    categories: PropTypes.array.isRequired
};

export default CategoriesItems;