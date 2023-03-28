import React from 'react'
import banner from '../../static/images/bcl/bcl-on-site-logo.png'
import {Link } from 'react-router-dom'

function AppLogo() {
	return (
		<Link to="/" className="-m-1.5 p-3">
			<span className="sr-only">BCL | onSite</span>
			<img src={banner} className="w-12" alt="BCL | OnSite" />
		</Link>
	)
}

export default AppLogo