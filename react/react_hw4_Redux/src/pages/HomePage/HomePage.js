import React, {useEffect} from 'react';
import '../../components/ProductList/ProductList.scss'
import ProductList from "../../components/ProductList/ProductList";
import {useDispatch} from "react-redux";
import {setProductsListAsync} from "../../redux/actions";

const HomePage = ({}) => {
    const dispatch=useDispatch();
    const classRemoveBtn = "remove-in-car-hidden";

    useEffect(() => {
        dispatch(setProductsListAsync())
    }, []);

    return (
        <ProductList classRemoveBtn={classRemoveBtn} />
    )
};

export default HomePage;
