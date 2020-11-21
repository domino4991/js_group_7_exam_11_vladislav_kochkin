import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Login.css';
import LoginForm from "../../components/UI/LoginForm/LoginForm";
import {loginUser} from "../../store/actions/userActions";

const Login = () => {
    const {error} = useSelector(state => state.users);
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const dispatch = useDispatch();

    const onFieldsChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmittedForm = (e) => {
        e.preventDefault();
        dispatch(loginUser({...user}));
    };

    const getFieldError = fieldName => {
        try {
            return error.errors[fieldName].message;
        } catch (e) {
            return null;
        }
    };

    return (
        <section className="Login-page">
            <h2 className="Title-page">Авторизация</h2>
            {error && <p className="Login-page__error">{error}</p>}
            <LoginForm
                password={user.password}
                getFieldError={getFieldError}
                onSubmitted={e => onSubmittedForm(e)}
                onChanged={e => onFieldsChange(e)}
                username={user.username}
            />
        </section>
    );
};

export default Login;