import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {push} from 'connected-react-router';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {postNewProduct} from "../../store/actions/productActions";
import ProductForm from "../../components/UI/ProductForm/ProductForm";
import {getCategories} from "../../store/actions/categoryActions";
import Spinner from "../../components/UI/Preloader/Spinner";

const CreateNewProduct = () => {
    const {error} = useSelector(state => state.products);
    const {user} = useSelector(state => state.users);
    const {categories, loading} = useSelector(state => state.categories);
    const [newProduct, setNewProduct] = useState({
        title: '',
        description: '',
        image: '',
        category: '',
        price: ''
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    if(!user) {
        dispatch(push('/login'));
    }

    const onChangeFields = e => {
        const name = e.target.name;
        const value = e.target.value;
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const getFieldError = fieldName => {
        try {
            return error.errors[fieldName].message;
        } catch (e) {
            return null;
        }
    };

    const onChangeFile = e => {
        const name = e.target.name;
        const value = e.target.files[0];
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmittedForm = e => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(newProduct).forEach(key => {
            formData.append(key, newProduct[key]);
        });
        dispatch(postNewProduct(formData));
    };

    return (
        <section className="Create-product-page">
            <h2 className="Title-page">Создание нового продукта</h2>
            {loading && <Spinner />}
            {categories && <ProductForm
                getFieldError={getFieldError}
                price={newProduct.price}
                category={newProduct.category}
                submitted={e => onSubmittedForm(e)}
                image={newProduct.image}
                title={newProduct.title}
                description={newProduct.description}
                categories={categories}
                onChanged={e => onChangeFields(e)}
                onChangedFile={e => onChangeFile(e)}
            />}
            <ToastContainer autoClose={5000} />
        </section>
    );
};

export default CreateNewProduct;