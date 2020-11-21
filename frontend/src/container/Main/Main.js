import React, {useEffect} from 'react';
import './Main.css';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../store/actions/productActions";
import ProductsItems from "../../components/Products/ProductsItems/ProductsItems";
import CategoriesItems from "../../components/Categories/CategoriesItems/CategoriesItems";
import {getCategories} from "../../store/actions/categoryActions";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../../components/UI/Preloader/Spinner";

const Main = () => {
    const {products, loading, error} = useSelector(state => state.products);
    const {categories} = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <section className="Products-page">
            {loading && <Spinner />}
            {error && <h2 style={{textAlign: 'center'}}>{error}</h2>}
            {!error && categories && <CategoriesItems categories={categories} />}
            {!error && products && <ProductsItems products={products} />}
            <ToastContainer autoClose={4000} />
        </section>
    );
};

export default Main;