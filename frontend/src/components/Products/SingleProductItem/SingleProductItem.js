import React from 'react';
import './SingleProductItem.css'
import PropTypes from 'prop-types';
import {apiUrl} from "../../../constants";
import {useSelector} from "react-redux";

const SingleProductItem = ({title, description, image, category, price, username, name, phone, clicked}) => {
    const {user} = useSelector(state => state.users);
    const path = apiUrl + '/uploads/' + image;
    return (
        <div className="Single-product">
            <div className="Single-product__img-box">
                <img
                    src={path}
                    alt={title}
                    className="Single-product__img"
                />
            </div>
            <div className="Single-product__content">
                <h4 className="Single-product__title Single-product__text">{title}</h4>
                <p className="Single-product__desc Single-product__text"><span>Описание: </span>{description}</p>
                <p className="Single-product__category Single-product__text"><span>Категория: </span>{category}</p>
                <p className="Single-product__price Single-product__text"><span>Цена: </span>{price} сом</p>
                <ul className="Single-product__list-user-info">
                    <li className="Single-product__list-item Single-product__text"><span>Имя продавца: </span>{name}</li>
                    <li className="Single-product__list-item Single-product__text"><span>Телефон: </span>{phone}</li>
                </ul>
            {
                user && user.username === username &&
                <button
                    type="button"
                    className="Single-product__delBtn"
                    onClick={clicked}
                >Удалить проданный товар</button>
            }
            </div>
        </div>
    );
};

SingleProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    clicked: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired
}

export default SingleProductItem;