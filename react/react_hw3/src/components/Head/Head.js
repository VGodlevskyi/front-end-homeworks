import React, {useState} from 'react';
import NavList from "./NavList/NavList";

const Head = () => {
    const[links, setLinks]=useState(['productList', 'favorites', 'cart']);

    return (
        <header className="container header-wrapper">
            <a className="header__company-logo" href="/">Vilka.com</a>
            <NavList items={links}/>

        </header>
    );
};

export default Head;