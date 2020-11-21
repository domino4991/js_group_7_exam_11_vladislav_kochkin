import {GET_CATEGORIES_ERROR, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS} from "../actionTypes";
import {axiosApi} from "../../axiosApi";

const getCategoriesRequest = () => ({type: GET_CATEGORIES_REQUEST});
const getCategoriesSuccess = data => ({type: GET_CATEGORIES_SUCCESS, data});
const getCategoriesError = error => ({type: GET_CATEGORIES_ERROR, error});

export const getCategories = () => {
    return async dispatch => {
        dispatch(getCategoriesRequest());
        try {
            const response = await axiosApi.get('/categories');
            dispatch(getCategoriesSuccess(response.data));
        } catch (e) {
            if(e.response && e.response.data) {
                dispatch(getCategoriesError(e.response.data.error));
            } else {
                dispatch(getCategoriesError(e.message));
            }
        }
    };
};