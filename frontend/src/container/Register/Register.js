import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../store/actions/userActions";
import RegisterForm from "../../components/UI/RegisterForm/RegisterForm";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const {error} = useSelector(state => state.users);
    const [user, setUser] = useState({
        username: '',
        password: '',
        name: '',
        phone: ''
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

    const getFieldError = fieldName => {
        try {
            return error.errors[fieldName].message;
        } catch (e) {
            return null;
        }
    };

    const onSubmittedForm = e => {
        e.preventDefault();
        dispatch(registerUser({...user}));
    };

    return (
        <section className="Register-page">
            <h2 className="Title-page">Регистрация</h2>
            <RegisterForm
                onSubmitted={e => onSubmittedForm(e)}
                getFieldError={getFieldError}
                phone={user.phone}
                name={user.name}
                password={user.password}
                username={user.username}
                onChanged={e => onFieldsChange(e)}
            />
            <ToastContainer autoClose={6000} />
        </section>
    );
};

export default Register;