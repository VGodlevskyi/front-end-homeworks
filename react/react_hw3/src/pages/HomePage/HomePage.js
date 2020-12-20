import React, {useEffect, useState} from 'react';
import '../../components/ProductList/ProductList.scss'
import ProductList from "../../components/ProductList/ProductList";
import {fetchProducts} from "../../utils/API";

const HomePage = () => {
    const classRemoveBtn = "remove-in-car-hidden";
    const [favouritesID, setFavouritesID] = useState(JSON.parse(localStorage.getItem('favourites')));
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts()
            .then((data) => setProducts({data}))

    }, []);

    return (
        <ProductList products={products} classRemoveBtn={classRemoveBtn} favouritesID={favouritesID} setFavouritesID={setFavouritesID}/>
    )
};

export default HomePage;
