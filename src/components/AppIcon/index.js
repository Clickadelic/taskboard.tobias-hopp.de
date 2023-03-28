import React from 'react'
import appIcon from '../../static/images/bcl/bcl_lb.png'
import {Link } from 'react-router-dom'

function AppIcon() {
	return (
		<Link to="/" className="-m-1.5 p-1.5">
			<span className="sr-only">BCL | onSite</span>
			<img src={appIcon} className="h-8 w-auto" alt="BCL | OnSite" />
		</Link>
	)
}

export default AppIcon