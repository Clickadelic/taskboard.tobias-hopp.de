import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthHeader from './components/AuthHeader/AuthHeader'
import AuthSidebar from './components/AuthSidebar/AuthSidebar'
import {useState, useEffect} from 'react'
import './App.css';

function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(true)

	const checkUserToken = () => {
    const userToken = localStorage.getItem('user-token');

    if (!userToken || userToken === 'undefined') {
			setIsLoggedIn(false);
		}
		setIsLoggedIn(true);
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);
	
	return (
		<div className="bg-slate-200 min-h-screen">
			{isLoggedIn && <AuthSidebar />}
			{isLoggedIn && <AuthHeader />}
			<Outlet />
		</div>
	);
}

export default App;