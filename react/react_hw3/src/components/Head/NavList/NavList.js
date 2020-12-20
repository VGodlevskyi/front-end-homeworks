import React from 'react';
import {NavLink} from "react-router-dom";

const NavList = (items) => {
    const itemsArray = items.items.map((item, index) => {

        return <li key={index} className="header__nav-item">
            <NavLink to={item} activeClassName="header__nav-link-selected" className="header__nav-link">{item}</NavLink>
        </li>
    });

    return (
        <ul className="header__nav-list">
            {itemsArray}
        </ul>
    );
};

export default NavList;