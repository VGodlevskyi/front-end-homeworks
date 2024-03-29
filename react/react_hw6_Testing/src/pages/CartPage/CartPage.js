import React, {useEffect} from 'react';
import ProductList from "../../components/ProductList/ProductList";
import {fetchProducts} from "../../utils/API";
import {useDispatch, useSelector} from "react-redux";
import {setProductsListAction} from "../../redux/actions";
import {selectProducts} from "../../redux/selectors";
import CreateForm from "../../components/Form/CreateForm";

const CartPage = ({}) => {
    const dispatch = useDispatch();
    let products = useSelector(selectProducts);
    const classRemoveBtn = "remove-in-cart";
    let inCart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')): [];

    useEffect(() => {
        fetchProducts().then(data => {
            const currentCart = JSON.parse(localStorage.getItem('cart'));
            currentCart ? dispatch(setProductsListAction((currentCart.map(id => data.find(product => product.id === id))))) : dispatch(setProductsListAction(([])));
        });
    }, [inCart.length]);

    return (
        <>
            {inCart.length > 0 &&
            <CreateForm/>}
            <ProductList classRemoveBtn={classRemoveBtn}/>
        </>
    )
};

export default CartPage;
