import {GET_CATEGORIES_ERROR, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS} from "../actionTypes";

const initialState = {
    categories: null,
    error: null,
    loading: false
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.data,
                error: null,
                loading: false
            };
        case GET_CATEGORIES_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
};