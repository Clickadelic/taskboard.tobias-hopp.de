import React from 'react'
import PublicNavbar from '@/components/PublicNavbar'
import Footer from '@/components/Footer'

function PublicLayout({children}) {
	return (
		<div className="public-layout">
			<PublicNavbar />
			<main style={{minHeight: "300px"}}>
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default PublicLayout