import React, {Component} from 'react';
import './app.scss'
import ProductList from "./Components/ProductList/ProductList";

class App extends Component {
    state = {
    };

    componentDidMount() {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                this.setState({products: data});
            })
    }

    render() {
        const {products = []} = this.state;

        return (

            <div className='App'>
                <ProductList products={products}/>
            </div>
        );
    }
}

export default App;
