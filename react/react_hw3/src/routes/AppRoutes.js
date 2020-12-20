import React, {useState} from 'react';
import {Route, Switch} from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";
import FavoritePage from "../pages/FavoritePage/FavoritePage";
import Page404 from "../pages/Page404/Page404";
import HomePage from "../pages/HomePage/HomePage";

const AppRoutes = () => {
    const [favouritesID, setFavouritesID] = useState(JSON.parse(localStorage.getItem('favourites')));
    return (
        <>
            <Switch>
                <Route exact path="/" render={() => <HomePage />}/>
                <Route exact path="/productList" render={() => <HomePage />}/>
                <Route exact path="/cart" render={() => <CartPage />}/>
                <Route exact path="/favorites" render={() => <FavoritePage />}/>
                <Route path="*" render={() => <Page404/>}/>
            </Switch>
        </>
    );
};

export default AppRoutes;