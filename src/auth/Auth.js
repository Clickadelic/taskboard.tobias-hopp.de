import React from "react";
import { Outlet } from "react-router-dom";

// TODO ReWrite these components to PublicHeader
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Auth = () => {
    return (
        <React.Fragment>
            <Header />
            	<Outlet />
            <Footer />
        </React.Fragment>
    );
}

export default Auth;