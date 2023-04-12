import React from "react";
import { Outlet } from "react-router-dom";

// TODO ReWrite these components to Public Header with Navbar
const Auth = () => {
    return (
		<div className="bg-rocky-beach min-h-screen md:pt-36">
        	<Outlet />
		</div>
    );
}

export default Auth;