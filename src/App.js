import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {useState, useEffect} from 'react'
import './App.css';

function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(true)

    // const checkUserToken = () => {
    //     // const userToken = localStorage.getItem('user-token');
	// 	const userToken = true

    //     if (!userToken || userToken === 'undefined') {
    //         setIsLoggedIn(false);
    //     }
    //     setIsLoggedIn(true);
    // }

    // useEffect(() => {
    //     checkUserToken();
    // }, [isLoggedIn]);
	
	return (
		<div className="bg-red-300">
			{isLoggedIn && <Header />}
				<Outlet />
			{isLoggedIn && <Footer />}
		</div>
	);
}

export default App;