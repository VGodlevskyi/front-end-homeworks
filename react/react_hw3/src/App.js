import React, {useState, useEffect} from 'react';
import './app.scss'
import AppRoutes from "./routes/AppRoutes";
import {fetchProducts} from "./utils/API";
import Head from "./components/Head/Head";

const App = () => {

    return (

        <div className='App'>
            <Head/>
            <AppRoutes />
        </div>
    );
};

export default App;


