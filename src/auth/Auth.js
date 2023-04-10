import React from "react";
import { Outlet } from "react-router-dom";

// TODO ReWrite these components to Public Header with Navbar
const Auth = () => {
    return (
		<div className="bg-open-field min-h-screen">
        	<Outlet />
		</div>
    );
}

export default Auth;