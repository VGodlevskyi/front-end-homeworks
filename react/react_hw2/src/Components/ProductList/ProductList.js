import React, {Component} from 'react';
import ProductCard from "../ProductCard/ProductCard";
import PropTypes from 'prop-types';
import './ProductList.scss'
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

class ProductList extends Component {
    state = {
        isModalFirstOpen: false,
        favourites: JSON.parse(localStorage.getItem('favourites')),
        cart: JSON.parse(localStorage.getItem('cart')),
        chosenCard: null
    };

    openFirstModal() {
        this.setState({isModalFirstOpen: true})
    }

    closeModal(e) {
        this.setState({isModalFirstOpen: false});
        this.setState({isModalSecondOpen: false});
    }

    addProductToCart() {
        const {cart, chosenCard} = this.state;
        let newCart = [chosenCard];
        if (cart) {
            newCart = [...cart, chosenCard]
        } else {
            newCart = newCart;
        }

        localStorage.setItem('cart', JSON.stringify(newCart));
        this.setState({cart: newCart});
        this.closeModal()
    }

    chosenCardForCart(id, cb) {
        this.setState({chosenCard: id}, cb)
    }

    changeFavourites(id) {
        const {favourites} = this.state;
        let newFavourites = [];
        if (favourites !== null) {
            newFavourites = [...favourites]
        }

        if (newFavourites.length === 0 || !newFavourites.includes(id)) {
            newFavourites.push(id)
        } else newFavourites.splice(newFavourites.indexOf(id), 1)

        localStorage.setItem("favourites", JSON.stringify(newFavourites))
        this.setState({favourites: JSON.parse(localStorage.getItem('favourites'))})
    }



    render() {
        const {products} = this.props;
        const {isModalFirstOpen, chosenCard} = this.state;

        const productList = products.map((product) => (

            <ProductCard key={product.id} id={product.id} name={product.name} price={product.price}
                         art={product.art}
                         color={product.color} url={product.url}
                         openFirstModal={(e) => this.openFirstModal(e)}
                         setCurrentProduct={() => this.chosenCardForCart(product.id)}
                         changeFavourites={() => this.changeFavourites(product.id)}
                         isFavorite={this.state.favourites}
            />));

        return (
            <div className="product-list">
                {productList}
                {isModalFirstOpen &&
                <Modal header={"Add product to the cart?"} closeButton={true}
                       text={'You can buy the product from the cart at any time'}
                       actions={
                           <div>
                               <Button onClick={(ev) => {
                                   this.addProductToCart()
                               }} text="Ok" className="button"/>
                               <Button onClick={(e) => this.closeModal(e)} text="Cancel" className="button"/>
                           </div>
                       } onClick={(e) => this.closeModal(e)}
                       chosenCard={chosenCard}
                />
                }
            </div>
        );
    }
}

export default ProductList;

ProductList
    .propTypes = {
    product: PropTypes.array,
    openFirstModal: PropTypes.func
};