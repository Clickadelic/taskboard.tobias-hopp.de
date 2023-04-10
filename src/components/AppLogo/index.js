import React from 'react'
import {Link } from 'react-router-dom'

function AppLogo() {
	return (
		<Link to="/" className="flex w-full justify-center -m-1.5 py-6 text-xl font-medium">
			<span className="sr-only">Toby's Dashboard</span>
			<span className="text-white">Toby's Dashboard</span>
		</Link>
	)
}

export default AppLogo