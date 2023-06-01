import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Register from './components/Forms/Register'
import Login from './components/Forms/Login'
import ForgotPassword from './components/Forms/ForgotPassword'
import Auth from './auth/Auth'
import Home from './routes/Home'
import Error404 from './routes/Error404'
import ProtectedRoute from './utilities/ProtectedRoute'
import Dashboard from './routes/Dashboard'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter basename={'/'}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/auth' element={<Auth />}>
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='forgot-password' element={<ForgotPassword />} />
				</Route>
				<Route path="/" element={<App />}>
					<Route path='/dashboard' element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					} />
				</Route>
				<Route path='*' element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
