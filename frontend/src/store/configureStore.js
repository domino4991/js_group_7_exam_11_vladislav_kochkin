import {compose, createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import {createBrowserHistory} from "history";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {categoryReducer} from "./reducers/categoryReducer";
import {userReducer} from "./reducers/userReducer";
import {productReducer} from "./reducers/productReducer";
import {loadFromLocalStorage, saveToLocalStorage} from "./localStorage";

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const rootReducer = combineReducers({
    router: connectRouter(history),
    categories: categoryReducer,
    users: userReducer,
    products: productReducer
});

const persistedState = loadFromLocalStorage();

const middleware = [thunkMiddleware, routerMiddleware(history)];
const enhancers = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveToLocalStorage({
        users: {
            user: store.getState().users.user
        }
    })
});

export default store;