import {
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_SUCCESS,
    GET_PRODUCTS_ERROR, GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_REQUEST,
    GET_SINGLE_PRODUCT_SUCCESS, POST_NEW_PRODUCT_ERROR, POST_NEW_PRODUCT_SUCCESS
} from "../actionTypes";

const initialState = {
    products: null,
    product: null,
    error: null,
    loading: false
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
        case GET_SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.data,
                error: null,
                loading: false
            };
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.data,
                error: null,
                loading: false
            };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                product: null,
                error: null
            };
        case POST_NEW_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false
            };
        case GET_SINGLE_PRODUCT_ERROR:
        case GET_PRODUCTS_ERROR:
        case DELETE_PRODUCT_ERROR:
        case POST_NEW_PRODUCT_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
};