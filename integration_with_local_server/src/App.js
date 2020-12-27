import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import ProductService from "./services/ProductService";
import ProductForm from "./components/form";
import SignUpForm from "./components/SignUp";
import AuthService from "./services/AuthService";

function App() {
    const [products, setProducts] = useState([]);
    const [isAuth, setIsAuth] = useState(true);
    const [editableProduct, setEditableProduct] = useState(null);

    useEffect(async () => {
        await onRefreshClick();
    }, []);

    useEffect(() => {
        const userToken = localStorage.getItem('token')
        console.log('token', userToken)
    }, []);

    const onRefreshClick = async () => {
        const {products} = await new ProductService().getProducts();
        setProducts(products);
    }

    const onProductFormSubmit = async data => {
        const {product} = await new ProductService()[
            data && data.id
                ? 'editProduct'
                : 'createProduct'
            ](data);

        setProducts(products => {
            let index;
            if (data && data.id) {
                 index = products.findIndex(product => product.id === data.id)
            }
            if (index >= 0) {
                const newProducts = [...products]
                newProducts[index] = data;
                return newProducts;
            }

            return [
                ...products,
                product
            ]
        })
        // await onRefreshClick();
    }

    const onSignUpFormSubmit = async data => {
        const response = await new AuthService().signUp(data);
        console.log('response =>', response);
        if (response.data) {
            const {user, token} = response.data
            localStorage.setItem('token', token);
            setIsAuth(!!token)
        }
        ;

    };

    const onEditFormClick = (product) => {
        setEditableProduct(product)
    }
    return (
        <div className="App">
            {isAuth ? (<p>User is authorized</p>) : <SignUpForm onSubmit={onSignUpFormSubmit}/>}

            <hr/>

            <div>
                <h1>Create Product</h1>
                <ProductForm onSubmit={onProductFormSubmit}/>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            {
                editableProduct ? (
                    <div>
                        <h1>Edit Product</h1>
                        <ProductForm
                            product={editableProduct}
                            onSubmit={onProductFormSubmit}/>
                    </div>) : null
            }
            <hr/>
            {
                products.length === 0
                    ? (<div>No any products found</div>)
                    : (
                        <ul>{
                            products.map(item => <li key={item.id}>{item.title}
                                {isAuth ? (
                                    <button onClick={() => onEditFormClick(item)}>Edit Products</button>) : null}</li>)
                        }</ul>
                    )
            }
            <div>
                <button onClick={onRefreshClick}>Refresh list</button>
            </div>
        </div>

    );
}

export default App;
