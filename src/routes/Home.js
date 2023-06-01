import React from 'react'
import {Link, NavLink} from 'react-router-dom'


function Home() {
	return (
		<div className="bg-black bg-black-gradient-tr">
			<header className="absolute inset-x-0 top-0 z-50">
				<nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
					<div className="flex lg:flex-1">
						<a href="https://www.tobias-hopp.de" target="_blank" title="Portfolio Tobias Hopp">Tobias Hopp</a>
					</div>
					<div className="flex lg:hidden">
						<button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
							<span className="sr-only">Open main menu</span>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						<a href="https://sandbox.tobias-hopp.de/" className="text-sm font-medium rounded-md border border-1 px-3 py-1 text-white hover:text-sky-600 leading-6" target="_blank">Sandbox</a>
						<a href="/" className="text-sm font-medium rounded-md border border-1 px-3 py-1 text-white hover:text-sky-600 leading-6">About</a>
						<a href="/" className="text-sm font-medium rounded-md border border-1 px-3 py-1 text-white hover:text-sky-600 leading-6">Administration</a>
						<a href="/" className="text-sm font-medium rounded-md border border-1 px-3 py-1 text-white hover:text-sky-600 leading-6">Company</a>
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<Link to="/auth/login" className="text-sm font-semibold leading-6 text-white hover:text-sky-600 hover:ring">Login<span aria-hidden="true">&rarr;</span></Link>
					</div>
				</nav>
				<div className="lg:hidden" role="dialog" aria-modal="true">
					<div className="fixed inset-0 z-50"></div>
					<div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							Logo
							<button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
								<span className="sr-only">Close menu</span>
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
								<NavLink to="/about" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50">Über diese Seite.</NavLink>
								<NavLink to="/functions" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50">Features</NavLink>
								<NavLink to="/administration" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50">Marketplace</NavLink>
								<NavLink to="/company" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50">Company</NavLink>
								</div>
								<div className="py-6">
									<NavLink to="/auth/login" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50">Log in</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div className="relative rounded-full py-1 px-3 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							Willkommen. <a href="/https://www.tobias-hopp.de/" className="font-semibold text-sky-600" target="_blank"><span className="absolute inset-0" aria-hidden="true"></span>Weitere Infos. <span aria-hidden="true">&rarr;</span></a>
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Toby's Dashboard</h1>
						<p className="mt-6 text-lg leading-8 text-white">Chaos redefined.</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link to="/auth/login" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">Zum Login</Link>
							<Link to="/auth/register/" className="text-sm font-semibold leading-6 text-sky-600">Registrieren<span aria-hidden="true">→</span></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home