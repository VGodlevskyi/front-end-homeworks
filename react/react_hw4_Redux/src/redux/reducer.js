import {SET_FAVOURITES_ID, SET_PRODUCT_LIST, TOGGLE_FIRST_MODAL, TOGGLE_REMOVE_MODAL} from "./actionTypes";

const initialStore = {
    products: [],
    isModalFirstOpen: false,
    isModalRemoveOpen: false,
    favouritesID: []
};

const reducer = (currentStore = initialStore, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return {
                ...currentStore,
                products: action.payload,
            };
        case SET_FAVOURITES_ID:
            return {
                ...currentStore,
                favouritesID: action.payload,
            };
        case TOGGLE_FIRST_MODAL:
            return {
                ...currentStore,
                isModalFirstOpen: action.payload,
            };
        case TOGGLE_REMOVE_MODAL:
            return {
                ...currentStore,
                isModalRemoveOpen: action.payload,
            };
        default:
            return currentStore
    }
};

export default reducer;