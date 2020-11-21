import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';

const LoginForm = ({username, password, onChanged, onSubmitted, getFieldError}) => {
    return (
        <form className="Login-form" onSubmit={onSubmitted}>
            <input
                type="text"
                name="username"
                value={username}
                onChange={onChanged}
                className="Login-form__fields"
                placeholder="Логин"
                id="username"
                required
            />
            {
                getFieldError('username')
                &&
                <label
                    htmlFor="username"
                    className="Login-form__error-label"
                >{getFieldError('username')}</label>
            }
            <input
                type="password"
                name="password"
                value={password}
                onChange={onChanged}
                className="Login-form__fields"
                placeholder="Пароль"
                id="password"
                required
            />
            {
                getFieldError('password')
                &&
                <label
                    htmlFor="password"
                    className="Login-form__error-label"
                >{getFieldError('password')}</label>
            }
            <button type="submit" className="Login-form__btn">Вход</button>
        </form>
    );
};

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onChanged: PropTypes.func.isRequired,
    onSubmitted: PropTypes.func.isRequired,
    getFieldError: PropTypes.func.isRequired
};

export default LoginForm;