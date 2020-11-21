import React from 'react';
import './RegisterForm.css';
import PropTypes from 'prop-types';

const RegisterForm = ({username, password, name, phone, onChanged, onSubmitted, getFieldError}) => {
    return (
        <form className="Register-form" onSubmit={onSubmitted}>
            <input
                type="text"
                name="username"
                value={username}
                onChange={onChanged}
                className="Register-form__fields"
                placeholder="Логин"
                id="username"
                required
            />
            {
                getFieldError('username')
                &&
                <label
                    htmlFor="username"
                    className="Register-form__error-label"
                >{getFieldError('username')}</label>
            }
            <input
                type="password"
                name="password"
                value={password}
                onChange={onChanged}
                className="Register-form__fields"
                placeholder="Пароль"
                id="password"
                required
            />
            {
                getFieldError('password')
                &&
                <label
                    htmlFor="password"
                    className="Register-form__error-label"
                >{getFieldError('password')}</label>
            }
            <input
                type="text"
                name="name"
                value={name}
                onChange={onChanged}
                className="Register-form__fields"
                placeholder="Имя"
                id="name"
                required
            />
            {
                getFieldError('name')
                &&
                <label
                    htmlFor="name"
                    className="Register-form__error-label"
                >{getFieldError('name')}</label>
            }
            <input
                type="text"
                name="phone"
                value={phone}
                onChange={onChanged}
                className="Register-form__fields"
                placeholder="Номер телефона"
                id="phone"
                required
            />
            {
                getFieldError('phone')
                &&
                <label
                    htmlFor="phone"
                    className="Register-form__error-label"
                >{getFieldError('phone')}</label>
            }
            <button type="submit" className="Register-form__btn">Зарегистрироваться</button>
        </form>
    );
};

RegisterForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onChanged: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    onSubmitted: PropTypes.func.isRequired,
    getFieldError: PropTypes.func.isRequired
};

export default RegisterForm;