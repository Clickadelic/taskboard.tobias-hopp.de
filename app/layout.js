import './globals.css'
import HeaderSidebar from '@/components/HeaderSidebar'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
	title: 'Dashboard &middot; Tobias Hopp',
	description: 'Pers&ouml;nliches Dashboard'
}

export default function RootLayout({ children }) {
	return (
		<html lang="de">
		<body className="bg-slate-100">
			<HeaderSidebar />
			<main className="w-full">
				<div className="pt-16 pl-4 pr-4 md:pl-72 md:pt-24 md:w-full min-h-screen">
					<Breadcrumbs />
					{children}
				</div>
			</main>
		</body>
		</html>
	)
}
