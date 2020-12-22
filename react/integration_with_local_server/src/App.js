import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import ProductService from "./services/ProductService";
import ProductForm from "./components/form";

function App() {
    const[products, setProducts]=useState([]);
    useEffect(async () => {
        await onRefreshClick();
    }, []);


    const onRefreshClick=async () => {
        const {products} = await new ProductService().getProducts();
        setProducts(products);
    }

    const onProductFormSubmit=async data=>{
        await new ProductService().createProduct(data);
        await onRefreshClick();
    }
    return (
        <div className="App">
            <ProductForm onSubmit={onProductFormSubmit}/>
            <hr/>
            {
                products.length===0
                    ?(<div>No any products found</div>)
                    :(
                        <ul>{
                            products.map(item=><li key={item.id}>{item.title}</li>)
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
