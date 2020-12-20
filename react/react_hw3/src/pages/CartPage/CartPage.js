import React, {useState, useEffect} from 'react';
import ProductList from "../../components/ProductList/ProductList";
import {fetchProducts} from "../../utils/API";

const CartPage = ({}) => {
    const classRemoveBtn = "remove-in-cart";
    const [favouritesID, setFavouritesID] = useState(JSON.parse(localStorage.getItem('favourites')));
    const [cart, setCart] = useState([]);

    let inCart;
    if (JSON.parse(localStorage.getItem('cart'))) {
        inCart = (JSON.parse(localStorage.getItem('cart'))).length;
    }
    useEffect(() => {
        fetchProducts().then(data => {
            const currentCart = JSON.parse(localStorage.getItem('cart'));
            currentCart ? setCart(currentCart.map(id => data.find(product => product.id === id))) : setCart([])
        })
    }, [inCart]);

    return (
        <ProductList products={cart} cartList={cart} setCartList={setCart} classRemoveBtn={classRemoveBtn}
                     favouritesID={favouritesID} setFavouritesID={setFavouritesID}/>
    )
};

export default CartPage;
