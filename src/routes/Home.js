import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import logoSrc from '../static/images/bcl/bcl_lb.png'

function Home() {
	return (
		
		<div class="bg-black">
			<header class="absolute inset-x-0 top-0 z-50">
				<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div class="flex lg:flex-1">
					<NavLink to="/" class="-m-1.5 p-1.5">
					<span class="sr-only">BCL | onSite</span>
					<img class="h-8 w-auto" src={logoSrc} alt="App Logo" />
					</NavLink>
				</div>
				<div class="flex lg:hidden">
					<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
					<span class="sr-only">Open main menu</span>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
					</button>
				</div>
				<div class="hidden lg:flex lg:gap-x-12">
					<NavLink href="#" class="text-sm font-semibold leading-6 text-white">Produkt</NavLink>
					<NavLink href="#" class="text-sm font-semibold leading-6 text-white">Funktionen</NavLink>
					<NavLink href="#" class="text-sm font-semibold leading-6 text-white">Administration</NavLink>
					<NavLink href="#" class="text-sm font-semibold leading-6 text-white">Unternehmen</NavLink>
				</div>
				<div class="hidden lg:flex lg:flex-1 lg:justify-end">
					<NavLink to="./auth/login" class="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></NavLink>
				</div>
				</nav>
				
				<div class="lg:hidden" role="dialog" aria-modal="true">
				
				<div class="fixed inset-0 z-50"></div>
				<div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div class="flex items-center justify-between">
					<Link href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">BCL</span>
						<img class="h-8 w-auto" src={logoSrc} alt="" />
					</Link>
					<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
						<span class="sr-only">Close menu</span>
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
					</div>
					<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
						<NavLink to="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50">Product</NavLink>

						<NavLink to="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50">Features</NavLink>

						<NavLink to="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50">Marketplace</NavLink>

						<NavLink to="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50">Company</NavLink>
						</div>
						<div class="py-6">
							<NavLink to="/auth/login" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50">Log in</NavLink>
						</div>
					</div>
					</div>
				</div>
				</div>
			</header>

			<div class="relative isolate px-6 pt-14 lg:px-8">
				<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div class="hidden sm:mb-8 sm:flex sm:justify-center">
						<div class="relative rounded-full py-1 px-3 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							BCL|OnSite. <Link to="/demo" class="font-semibold text-teal-600"><span class="absolute inset-0" aria-hidden="true"></span>Mehr erfahren <span aria-hidden="true">&rarr;</span></Link>
						</div>
					</div>
					<div class="text-center">
						<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Prozessorientierte Baulogistiksteuerung</h1>
						<p class="mt-6 text-lg leading-8 text-white">Die Features unserer Hauseigenen Software BCL|OnSite sind maßgeschneidert für Ihre Bedürfnisse.</p>
						<div class="mt-10 flex items-center justify-center gap-x-6">
							<Link to="#" class="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">BCL|OnSite Login</Link>
							<Link to="#product" class="text-sm font-semibold leading-6 text-white">Mehr erfahren <span aria-hidden="true">→</span></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home