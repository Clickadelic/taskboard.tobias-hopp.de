import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Auth from './auth/Auth';
import App from './App';
import ProtectedRoute from './utilities/ProtectedRoute';
import Dashboard from './routes/Dashboard'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter basename={'/'}>
			<Routes>
				<Route path='/auth' element={<Auth />}>
					<Route path='login' element={<Login />} />
				</Route>
				<Route path="/" element={<App />}>
					<Route path='/dashboard' element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
