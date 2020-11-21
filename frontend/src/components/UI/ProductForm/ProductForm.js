import React from 'react';
import './ProductForm.css';
import PropTypes from 'prop-types';

const ProductForm = (
    {
        title,
        price,
        onChanged,
        getFieldError,
        submitted,
        description,
        image,
        categories,
        category,
        onChangedFile
    }) => {
    return (
        <form
            className="Product-form"
            onSubmit={submitted}
        >
            <input
                type="text"
                name="title"
                value={title}
                onChange={onChanged}
                className="Product-form__fields"
                placeholder="Название продукта"
                id="title"
                required
            />
            {
                getFieldError('title')
                &&
                <label
                    htmlFor="title"
                    className="Product-form__error-label"
                >{getFieldError('title')}</label>
            }
            <textarea
                name="description"
                value={description}
                onChange={onChanged}
                className="Product-form__fields Product-form__textarea"
                placeholder="Описание продукта"
                id="description"
                required
            />
            {
                getFieldError('description')
                &&
                <label
                    htmlFor="description"
                    className="Product-form__error-label"
                >{getFieldError('description')}</label>
            }
            <input
                type="text"
                name="price"
                value={price}
                onChange={onChanged}
                className="Product-form__fields"
                placeholder="Цена"
                id="price"
                required
            />
            {
                getFieldError('price')
                &&
                <label
                    htmlFor="price"
                    className="Product-form__error-label"
                >{getFieldError('price')}</label>
            }
            <input
                type="file"
                name="image"
                onChange={onChangedFile}
                className="Product-form__fields"
                placeholder="Изображение продукта"
                id="image"
                required
            />
            {
                getFieldError('image')
                &&
                <label
                    htmlFor="image"
                    className="Product-form__error-label"
                >{getFieldError('image')}</label>
            }
            <select
                name="category"
                className="Product-form__category"
                id="category"
                value={category}
                onChange={onChanged}
                required
            >
                <option value=''>Выберите категорию...</option>
                {categories && categories.map(category => <option
                    key={category._id}
                    value={category._id}
                >
                    {category.title}
                </option>)}
            </select>
            {
                getFieldError('category')
                &&
                <label
                    htmlFor="category"
                    className="Product-form__error-label"
                >{getFieldError('category')}</label>
            }
            <button
                type="submit"
                className="Product-form__btn"
            >Создать</button>
        </form>
    );
};

ProductForm.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    category: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    onChanged: PropTypes.func.isRequired,
    submitted: PropTypes.func.isRequired,
    getFieldError: PropTypes.func.isRequired,
    price: PropTypes.string.isRequired,
    onChangedFile: PropTypes.func.isRequired
};

export default ProductForm;