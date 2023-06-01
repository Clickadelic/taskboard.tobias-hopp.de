import React from "react";
import Logo from '../components/Logo';
import { Outlet } from "react-router-dom";

// TODO ReWrite these components to Public Header with Navbar
const Auth = () => {
    return (
		<div className="bg-mountain-beach brightness-75 min-h-screen">
			<div className="w-[480px] backdrop-blur-sm rounded-md p-16 m-auto">
				<Logo name="Tobias Hopp" classes="text-slate-200 text-3xl w-[166px] mx-auto mb-12" />
        		<Outlet />
			</div>
		</div>
    );
}

export default Auth;