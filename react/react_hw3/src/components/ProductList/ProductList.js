import React, {useState} from 'react';
import ProductCard from "../ProductCard/ProductCard";
import PropTypes from 'prop-types';
import './ProductList.scss'
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

const ProductList = ({products, classRemoveBtn, cartList, setCartList, favouritesID, setFavouritesID}) => {
    const [isModalFirstOpen, setIsModalFirstOpen] = useState(false);
    const [isModalRemoveOpen, setIsModalRemoveOpen] = useState(false);
    const [chosenCard, setChosenCard] = useState(null);

    const openModal = () => {
        setIsModalFirstOpen(true)
    };
    const closeModal = () => {
        setIsModalFirstOpen(false);
        setIsModalRemoveOpen(false)
    };

    const openModalRemove = () => {
        setIsModalRemoveOpen(true)
    };

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
        if(setCartList) {setCartList(newCart)}
        closeModal();
    };

    const removeProductFromCart = () => {
        let newCart = cartList;
        let arrCartId = []
        newCart = cartList.forEach((item) => {
            arrCartId.push(item.id)
        });
        if (cartList) {
            arrCartId.splice(arrCartId.indexOf(chosenCard), 1);
            localStorage.setItem('cart', JSON.stringify(arrCartId));
            setCartList(arrCartId);
            closeModal();
        }
    };

    const changeFavouritesList = (id) => {
        let arrFavouritesId = [];
        if (favouritesID) arrFavouritesId = [...favouritesID]
        if (arrFavouritesId.length === 0 || !arrFavouritesId.includes(id)) {
            arrFavouritesId.push(id)
        } else arrFavouritesId.splice(arrFavouritesId.indexOf(id), 1);

        localStorage.setItem("favourites", JSON.stringify(arrFavouritesId));
        setFavouritesID(JSON.parse(localStorage.getItem('favourites')))
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
        productList = products.map((product) => (
            <ProductCard key={`f${(~~(Math.random()*1e8)).toString(16)}`} id={product.id} name={product.name} price={product.price}
                         art={product.art}
                         color={product.color} url={product.url}
                         openFirstModal={() => openModal()}
                         setCurrentProduct={() => chosenCurrentCard(product.id)}
                         changeFavourites={() => changeFavouritesList(product.id)}
                         isFavoriteItem={() => isFavoriteItem(product.id)}
                         classNameRemoveBtn={classRemoveBtn}
                         openRemoveModal={() => openModalRemove()}
            />));
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
                               closeModal()

                           }} text="Ok" className="button"/>
                           <Button onClick={() => closeModal()} text="Cancel" className="button"/>
                       </div>
                   } onClick={() => closeModal()}
                   chosenCard={chosenCurrentCard}
            />}

            {isModalRemoveOpen &&
            <Modal header={"Remove product from the cart?"} closeButton={true}
                   text={'Product will be permanently removed from the cart, are you sure?'}
                   actions={
                       <div>
                           <Button onClick={() => {
                               removeProductFromCart();
                               closeModal()
                           }} text="Remove" className="button"/>
                           <Button onClick={
                               () => closeModal()} text="Cancel" className="button"/>
                       </div>
                   } onClick={() => closeModal()}
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