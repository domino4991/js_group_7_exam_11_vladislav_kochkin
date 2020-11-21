import React, {useState} from 'react';
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import PropTypes from 'prop-types';
import './UserMenu.css';

const UserMenu = ({name}) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <li className="Header__nav-item">
                <span
                    className="Header__nav-link Header_dropdown"
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                >
                    {name}
                    <DropDownMenu show={show} />
                </span>
            </li>
        </>
    );
};

UserMenu.propTypes = {
    name: PropTypes.string.isRequired
};

export default UserMenu;