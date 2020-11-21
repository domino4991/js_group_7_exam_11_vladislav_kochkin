import React from 'react';
import {NavLink} from "react-router-dom";

const AnonymousMenu = () => {
    return (
        <>
            <li className="Header__nav-item">
                <NavLink
                    to='/register'
                    exact
                    className="Header__nav-link"
                >
                    Register
                </NavLink>
            </li>
            <li className="Header__nav-item">
                <NavLink
                    to='/login'
                    exact
                    className="Header__nav-link"
                >
                    Login
                </NavLink>
            </li>
        </>
    );
};

export default AnonymousMenu;