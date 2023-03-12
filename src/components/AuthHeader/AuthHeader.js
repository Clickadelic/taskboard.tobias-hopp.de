import React from "react";
import { useNavigate } from "react-router-dom";

const AuthHeader = () => {

    const navigate = useNavigate();
    // const logout = () => {
    //     localStorage.clear();
    //     navigate('/auth/login');
    // }

    return (
        <div className="absolute ml-64 w-full p-2 bg-teal-600 text-white">
			AuthHeader
		</div>
    );
}

export default AuthHeader;