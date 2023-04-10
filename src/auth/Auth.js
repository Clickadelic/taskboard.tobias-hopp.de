import React from "react";
import { Outlet } from "react-router-dom";

// TODO ReWrite these components to Public Header with Navbar
const Auth = () => {
    return (
        <div className="flex h-screen bg-slate-200">        
        	<Outlet />
		</div>
    );
}

export default Auth;