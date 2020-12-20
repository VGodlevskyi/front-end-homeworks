import {
    CHECKOUT_CART,
    SET_FAVOURITES_ID,
    SET_PRODUCT_LIST,
    TOGGLE_FIRST_MODAL,
    TOGGLE_REMOVE_MODAL
} from "../actionTypes";
import {fetchProducts} from "../../utils/API";

export const setProductsListAction = (products) => ({
    type: SET_PRODUCT_LIST,
    payload: products
});

export const setProductsListAsync = (products) => dispatch => {
    fetchProducts(products)
        .then(result => {
            dispatch(setProductsListAction(result))
        })
};

export const checkoutCartAction = (cartID) => ({
    type: CHECKOUT_CART,
    payload: cartID
});

export const setFavouritesIDAction = (favouritesID) => ({
    type: SET_FAVOURITES_ID,
    payload: favouritesID
});

export const toggleFirstModalAction = isModalFirstOpen => ({
    type: TOGGLE_FIRST_MODAL,
    payload: !isModalFirstOpen
});

export const toggleRemoveModalAction = isModalRemoveOpen => ({
    type: TOGGLE_REMOVE_MODAL,
    payload: !isModalRemoveOpen
});

