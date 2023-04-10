import React from 'react'
// import appIcon from '../../static/images/bcl/bcl_lb.png'
import {Link } from 'react-router-dom'

function AppIcon() {
	return (
		<Link to="/" className="-m-1.5 p-1.5 text-white flex">
			<span className="sr-only">Toby's Dashboard</span>
			<span className="text-white">Toby's Dashboard</span>
		</Link>
	)
}

export default AppIcon