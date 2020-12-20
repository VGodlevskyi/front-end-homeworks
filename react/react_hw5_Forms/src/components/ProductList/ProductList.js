import React, {useState} from 'react';
import ProductCard from "../ProductCard/ProductCard";
import PropTypes from 'prop-types';
import './ProductList.scss'
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    selectFavouritesID,
    selectIsModalFirstOpen,
    selectIsModalRemoveOpen,
    selectProducts
} from "../../redux/selectors";

import {TOGGLE_FIRST_MODAL, TOGGLE_REMOVE_MODAL} from "../../redux/actionTypes";
import {setFavouritesIDAction, setProductsListAsync} from "../../redux/actions";

const ProductList = ({classRemoveBtn}) => {
    const dispatch = useDispatch();
    const [chosenCard, setChosenCard] = useState(null);
    let products = useSelector(selectProducts);
    let favouritesID = useSelector(selectFavouritesID);
    let isModalFirstOpen = useSelector(selectIsModalFirstOpen);
    let isModalRemoveOpen = useSelector(selectIsModalRemoveOpen);

    const chosenCurrentCard = (id, cb) => {
        setChosenCard(id, cb);
    };

    const addProductToCart = () => {
        let newCart = [chosenCard];
        let local = JSON.parse(localStorage.getItem('cart'))
        if (local) {
            newCart = [...local, chosenCard]
        }
        localStorage.setItem('cart', JSON.stringify(newCart));
        if (products) {
            products = newCart
        }
        dispatch(setProductsListAsync())
    };

    const removeProductFromCart = () => {
        let newCart = products;
        let arrCartId = [];
        newCart = products.forEach((item) => {
            arrCartId.push(item.id)
        });
        if (products) {
            arrCartId.splice(arrCartId.indexOf(chosenCard), 1);
            localStorage.setItem('cart', JSON.stringify(arrCartId));
            products = arrCartId;
        }
        dispatch(setProductsListAsync(products));
    };

    const changeFavouritesList = (id) => {
        let arrFavouritesId = [];
        if (favouritesID) arrFavouritesId = [...favouritesID];
        if (arrFavouritesId.length === 0 || !arrFavouritesId.includes(id)) {
            arrFavouritesId.push(id)
        } else arrFavouritesId.splice(arrFavouritesId.indexOf(id), 1);

        localStorage.setItem("favourites", JSON.stringify(arrFavouritesId));
        dispatch(setFavouritesIDAction(localStorage.getItem('favourites')))
    };

    const isFavoriteItem = (id) => {
        favouritesID = JSON.parse(localStorage.getItem('favourites'));
        if (favouritesID && favouritesID.includes(id)) {
            return true
        } else return false
    };

    let productList;
    if (products || products.data) {
        if (products.data) {
            products = products.data
        }
        if (products.length) {
            productList = products.map((product) => (
                <ProductCard key={`f${(~~(Math.random() * 1e8)).toString(16)}`} id={product.id} name={product.name}
                             price={product.price}
                             art={product.art}
                             color={product.color} url={product.url}
                             setCurrentProduct={() => chosenCurrentCard(product.id)}
                             changeFavourites={() => changeFavouritesList(product.id)}
                             isFavoriteItem={() => isFavoriteItem(product.id)}
                             classNameRemoveBtn={classRemoveBtn}
                />));
        }
    }

    return (
        <div className="product-list">
            {productList}
            {isModalFirstOpen &&
            <Modal header={"Add product to the cart?"} closeButton={true}
                   text={'You can buy the product from the cart at any time'}
                   actions={
                       <div>
                           <Button onClick={() => {
                               addProductToCart();
                               dispatch({type: TOGGLE_FIRST_MODAL, payload: !isModalFirstOpen});
                           }} text="Ok" className="button"/>
                           <Button onClick={() => dispatch({type: TOGGLE_FIRST_MODAL, payload: !isModalFirstOpen})}
                                   text="Cancel" className="button"/>
                       </div>
                   } onClick={() => dispatch({type: TOGGLE_FIRST_MODAL, payload: !isModalFirstOpen})}
                   chosenCard={chosenCurrentCard}
            />}

            {isModalRemoveOpen &&
            <Modal header={"Remove product from the cart?"} closeButton={true}
                   text={'Product will be permanently removed from the cart, are you sure?'}
                   actions={
                       <div>
                           <Button onClick={() => {
                               removeProductFromCart();
                               dispatch({type: TOGGLE_REMOVE_MODAL, payload: !isModalRemoveOpen});
                           }} text="Remove" className="button"/>
                           <Button onClick={() => dispatch({type: TOGGLE_REMOVE_MODAL, payload: !isModalRemoveOpen})}
                                   text="Cancel" className="button"/>
                       </div>
                   } onClick={() => dispatch({type: TOGGLE_REMOVE_MODAL, payload: !isModalRemoveOpen})}
                   chosenCard={chosenCurrentCard}
            />}
        </div>
    );
};

export default ProductList;

ProductList
    .propTypes = {
    product: PropTypes.array,
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
    openModalRemove: PropTypes.func,
    chosenCurrentCard: PropTypes.func,
    addProductToCart: PropTypes.func,
    removeProductFromCart: PropTypes.func,
    changeFavouritesList: PropTypes.func,
    quantityItemsInCart: PropTypes.func,
};