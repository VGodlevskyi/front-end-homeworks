import React, {Component} from 'react';
import Button from "../Button/Button";
import "./ProductCard.scss"
import PropTypes from 'prop-types';

class ProductCard extends Component {
    state = {
        isFavorite: false,
    };

    changeFavoriteState() {
        this.setState({isFavorite: !this.state.isFavorite})
    }

    componentDidMount() {
        const {id, isFavorite} = this.props;
        if (isFavorite){
        isFavorite.forEach((item) => {
            if (item === id) {
                this.setState({isFavorite: true})
                return true
            }
        })}
    }

    render() {
        const {name, price, color, url, art, openFirstModal, setCurrentProduct, changeFavourites} = this.props;

        return (
            <div className="product-card">
                <div className="product-card__img">
                    <a href="" className="product-card__img-link">
                        <img src={url} alt="" className="product-card__img-item"/>
                    </a>
                </div>
                <div className="product__art">article {art}</div>
                <div className="product__name">Smartphone {name}</div>
                <div className="product__price-wrapper">
                    <div style={{color}} className="product__color">{color}</div>
                    <div className="product__price">{price} UAH</div>
                </div>
                <div className="product__cart-btn-wrapper">
                    <Button className="product__cart-btn" text='Add to cart' backgroundColor='#FFFFF'
                            onClick={(w) => {
                                openFirstModal(w);
                                setCurrentProduct();
                            }}/>
                    <svg viewBox="0 0 24 22"
                         className={this.state.isFavorite ? "icon-favorites--active" : "icon-favorites"}
                         onClick={(w) => {
                             changeFavourites(w);
                             this.changeFavoriteState()
                         }}>
                        <path
                            d="M11.3022 2.72346L12.0004 3.40422L12.6985 2.72332C13.7846 1.66396 15.276 1 16.9387 1C20.3433 1 23 3.75848 23 7.03761C23 8.77432 22.2631 10.3504 21.0666 11.4595L21.0516 11.4734L21.0372 11.4879L11.9982 20.5815L2.90797 11.4364L2.89728 11.4256L2.88627 11.4152C1.71766 10.3087 1 8.75166 1 7.03761C1 3.75848 3.65669 1 7.06134 1C8.72443 1 10.2154 1.66391 11.3022 2.72346Z"></path>
                    </svg>
                </div>
            </div>
        );
    }
}

export default ProductCard;

ProductCard
    .propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url: PropTypes.string,
    art: PropTypes.string
};
ProductCard
    .defaultProps = {
    color: "black"
};