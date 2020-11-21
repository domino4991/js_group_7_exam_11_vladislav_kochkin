import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import AnonymousMenu from "../UI/AnonymousMenu/AnonymousMenu";
import {useSelector} from "react-redux";
import UserMenu from "../UI/UserMenu/UserMenu";

const Header = () => {
    const {user} = useSelector(state => state.users);
    return (
        <header className="Header">
            <div className="container Header__inner">
                <NavLink
                    to='/'
                    exact
                    className="Header__logo"
                >
                    Groove Street Market
                </NavLink>
                <nav className="Header__nav">
                    <ul className="Header__nav-list">
                        <li className="Header__nav-item">
                            <NavLink
                                to='/'
                                exact
                                className="Header__nav-link"
                            >
                                Home
                            </NavLink>
                        </li>
                        {!user ? <AnonymousMenu /> : <UserMenu name={user.name}/>}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;