import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import Main from "./container/Main/Main";
import {Route, Switch} from "react-router-dom";
import Register from "./container/Register/Register";
import Login from "./container/Login/Login";
import SingleProduct from "./container/SingleProduct/SingleProduct";
import CreateNewProduct from "./container/CreateNewProduct/CreateNewProduct";

const App = () => {
  return (
    <Layout>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/add-new-product" exact component={CreateNewProduct} />
            <Route path="/products/:id" component={SingleProduct} />
            <Route render={() => <h1 style={{textAlign: 'center'}}>404 page not found</h1>} />
        </Switch>
    </Layout>
  );
}

export default App;
