import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Auth from './auth/Auth'
import App from './App'
import Error404 from './routes/Error404'
import ProtectedRoute from './utilities/ProtectedRoute'
import Dashboard from './routes/Dashboard'
import './index.css';
import ForgotPassword from './components/ForgotPassword'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter basename={'/'}>
			<Routes>
				{/* <Route path='/' element={<Home />} /> */}
				<Route path='/auth' element={<Auth />}>
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='forgot-password' element={<ForgotPassword />} />
				</Route>
				<Route path="/" element={<App />}>
					<Route path='/' element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					} />
					<Route path='/overview' element={
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
