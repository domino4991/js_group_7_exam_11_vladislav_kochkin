import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {logoutUser} from "../../../store/actions/userActions";
import './DropDownMenu.css';

const DropDownMenu = ({show}) => {
    const dispatch = useDispatch();
    let classes = show ? ['DropDownMenu', 'active'] : ['DropDownMenu'];

    return (
        <div className={classes.join(' ')}>
            <nav className="DropDownMenu__nav">
                <ul className="DropDownMenu__nav-list">
                    <li className="DropDownMenu__nav-item">
                        <NavLink
                            to="/add-new-product"
                            className="DropDownMenu__nav-link"
                        >
                            Добавить новый товар
                        </NavLink>
                    </li>
                    <li className="DropDownMenu__nav-item">
                        <button
                            className="DropDownMenu__nav-link"
                            onClick={() => dispatch(logoutUser())}
                        >
                            Выйти
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

DropDownMenu.propTypes = {
    show: PropTypes.bool.isRequired
};


export default DropDownMenu;