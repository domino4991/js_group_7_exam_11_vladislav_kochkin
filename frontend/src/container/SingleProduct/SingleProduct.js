import React, {useEffect} from 'react';
import SingleProductItem from "../../components/Products/SingleProductItem/SingleProductItem";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, getSingleProduct} from "../../store/actions/productActions";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Spinner from "../../components/UI/Preloader/Spinner";

const SingleProduct = (props) => {
    const {product, loading, error} = useSelector(state => state.products);
    const dispatch = useDispatch();
    const id = props.match.params.id;

    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [dispatch, id]);

    return (
        <section className="Single-product-page">
            {loading && <Spinner />}
            {error && <h2 style={{textAlign: 'center'}}>{error}</h2>}
            {product && <SingleProductItem
                phone={product.user.phone}
                id={product._id}
                username={product.user.username}
                category={product.category.title}
                name={product.user.name}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                clicked={() => dispatch(deleteProduct(product._id))}
            />}
            <ToastContainer autoClose={4000} />
        </section>
    );
};

export default SingleProduct;