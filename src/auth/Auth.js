import React from "react";
import { Outlet } from "react-router-dom";

// TODO ReWrite these components to Public Header with Navbar
const Auth = () => {
    return (
		<div className="bg-rocky-beach min-h-screen md:pt-36">
			<div className="w-[480px] backdrop-blur-sm rounded-md p-16 m-auto">
        		<Outlet />
			</div>
		</div>
    );
}

export default Auth;