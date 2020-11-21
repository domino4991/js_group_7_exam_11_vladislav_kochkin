import {
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_SUCCESS,
    GET_PRODUCTS_ERROR, GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_REQUEST,
    GET_SINGLE_PRODUCT_SUCCESS, POST_NEW_PRODUCT_ERROR, POST_NEW_PRODUCT_SUCCESS
} from "../actionTypes";
import {axiosApi} from "../../axiosApi";
import {toast} from "react-toastify";
import {push} from 'connected-react-router';

const getProductsRequest = () => ({type: GET_PRODUCTS_REQUEST});
const getProductsSuccess = data => ({type: GET_PRODUCTS_SUCCESS, data});
const getProductsError = error => ({type: GET_PRODUCTS_ERROR, error});

const getSingleProductRequest = () => ({type: GET_SINGLE_PRODUCT_REQUEST});
const getSingleProductSuccess = data => ({type: GET_SINGLE_PRODUCT_SUCCESS, data});
const getSingleProductError = error => ({type: GET_SINGLE_PRODUCT_ERROR, error});

const deleteProductSuccess = () => ({type: DELETE_PRODUCT_SUCCESS});
const deleteProductError = error => ({type: DELETE_PRODUCT_ERROR, error});

const postNewProductSuccess = () => ({type: POST_NEW_PRODUCT_SUCCESS});
const postNewProductError = error => ({type: POST_NEW_PRODUCT_ERROR, error});

export const getProducts = query => {
    return async dispatch => {
        dispatch(getProductsRequest());
        try {
            const response = await axiosApi.get(query ? `/products?category=${query}` : '/products');
            dispatch(getProductsSuccess(response.data));
        } catch (e) {
            if(e.response && e.response.data) {
                dispatch(getProductsError(e.response.data.error));
            } else {
                dispatch(getProductsError(e.message));
            }
        }
    }
};

export const getSingleProduct = id => {
    console.log(id);
    return async dispatch => {
        dispatch(getSingleProductRequest());
        try {
            const response = await axiosApi.get(`/products/${id}`);
            dispatch(getSingleProductSuccess(response.data));
        } catch (e) {
            if(e.response && e.response.data) {
                dispatch(getSingleProductError(e.response.data.error));
            } else {
                dispatch(getSingleProductError(e.message));
            }
        }
    };
};

export const deleteProduct = id => {
    return async (dispatch, getState) => {
        const token = getState().users.user && getState().users.user.token;
        const headers = {'Authorization': token};
        try {
            const response = await axiosApi.delete(`/products/${id}`, {headers});
            toast.success(response.data.message);
            dispatch(deleteProductSuccess());
            setTimeout(() => {
                dispatch(push('/'));
            }, 3000)
        } catch (e) {
            if(e.response && e.response.data) {
                dispatch(deleteProductError(e.response.data.error));
            } else {
                dispatch(deleteProductError(e.message));
            }
        }
    }
};

export const postNewProduct = data => {
    return async (dispatch, getState) => {
        const headers = {
            'Authorization': getState().users.user && getState().users.user.token
        }
        if(!getState().users.user) {
            dispatch(push('/login'));
        } else {
            try {
                const response = await axiosApi.post('/products', data, {headers});
                toast.success(response.data.message);
                dispatch(postNewProductSuccess());
                setTimeout(() => {
                    dispatch(push('/'));
                }, 4000);
            } catch (e) {
                if(e.response && e.response.data) {
                    dispatch(postNewProductError(e.response.data));
                } else {
                    dispatch(postNewProductError(e.message));
                }
            }
        }
    }
}