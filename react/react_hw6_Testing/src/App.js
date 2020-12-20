import './app.scss'
import AppRoutes from "./AppRoutes";
import Head from "./components/Head/Head";

const App = () => {

    return (

        <div className='App'>
            <Head/>
            <AppRoutes />
        </div>
    );
};

export default (App);


