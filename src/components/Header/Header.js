import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();
    // const logout = () => {
    //     localStorage.clear();
    //     navigate('/auth/login');
    // }

    return (
        <div className="container m-auto w-full p-2 bg-sky-600">
			Header with Navbar
		</div>
    );
}

export default Navbar;