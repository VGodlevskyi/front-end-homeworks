import React, {useEffect} from 'react';
import ProductList from "../../components/ProductList/ProductList";
import {fetchProducts} from "../../utils/API";
import {useDispatch, useSelector} from "react-redux";
import {setProductsListAction} from "../../redux/actions";
import {selectFavouritesID, selectIsModalFirstOpen, selectProducts} from "../../redux/selectors";

const FavoritePage = ({}) => {
    const dispatch = useDispatch();
    let favouritesID = useSelector(selectFavouritesID);
    let isModalFirstOpen = useSelector(selectIsModalFirstOpen);

    useEffect(() => {
        fetchProducts().then(data => {
            let currentCart = JSON.parse(localStorage.getItem('favourites'));
            currentCart ? dispatch(setProductsListAction((currentCart.map(id => data.find(product => product.id === id))))) : dispatch(setProductsListAction(([])));
        })
    }, [favouritesID,isModalFirstOpen]);

    return (
        <ProductList/>
    )
};

export default FavoritePage;