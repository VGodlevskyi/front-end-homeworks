import React, {useState, useEffect} from 'react';
import ProductList from "../../components/ProductList/ProductList";
import {fetchProducts} from "../../utils/API";

const FavoritePage = ({}) => {

    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const [favouritesID, setFavouritesID] = useState(JSON.parse(localStorage.getItem('favourites')));

    useEffect(() => {
        fetchProducts().then(data => {
            let currentCart = favouritesID;
            if (currentCart) {
                setFavoriteProducts(currentCart.map(id => data.find(product => product.id === id)))
                setFavouritesID(currentCart)
            } else {
                setFavoriteProducts([])
            }

        })
    }, [favouritesID]);


    return (
        <ProductList products={favoriteProducts} favouritesID={favouritesID} setFavouritesID={setFavouritesID}/>
    )
};

export default FavoritePage;