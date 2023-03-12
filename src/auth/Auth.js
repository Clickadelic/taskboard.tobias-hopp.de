import React from "react";
import { Outlet } from "react-router-dom";

// TODO ReWrite these components to PublicHeader
const Auth = () => {
    return (
        <div className="cool-background flex h-screen">        
        	<Outlet />
		</div>
    );
}

export default Auth;