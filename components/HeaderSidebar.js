'use client'
import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { TextIndentLeft, TextIndentRight, Person, Gear, Bell, Envelope, Columns, Flag, Speedometer2, ListCheck, ListStars } from 'react-bootstrap-icons'
import logoSrc from '../assets/logo/icon-32.png'

// Active State classes
// bg-sky-100 border-r-2 border-r-sky-500

// TODO Active State Classes
function HeaderSidebar() {

	// Sidebar Toggle
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	function toggleSidebar() {
		isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
	}
	
	// MegaMenu Toggle
	const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
	function toggleMegaMenu() {
		isMegaMenuOpen ? setIsMegaMenuOpen(false) : setIsMegaMenuOpen(true)
	}

	return (
		<>
			<aside className={`App-sidebar md:block fixed top-0 left-0 min-h-screen bg-white shadow ${isSidebarOpen == true ? 'w-16' : 'w-64'}`}>
				<div className="App-sidebar-logo flex justify-center px-2 py-3">
					<h1 className="text-2xl">
						<Link href="/">
							<Image src={logoSrc} className={`${isSidebarOpen == true ? 'logo inline -mt-1' : 'logo inline mr-2 -mt-1'}`}  alt="WebDev HQ Logo" />
							<span className={`${isSidebarOpen == true ? 'hidden' : ''}`}><span className="web">Web</span><span className='dev-hq font-medium'>Dev HQ</span></span>
						</Link>
					</h1>
				</div>
				<section className="App-sidebar-section mt-10 mb-6">
					<ul className="App-sidebar-nav">
						<li>
							<Link href="/dashboard" className="flex p-3 hover:bg-slate-100 hover:border-r-2 hover:border-r-slate-200">
								<Speedometer2 size={24} />
								<span className={`${isSidebarOpen == true ? 'hidden' : 'inline-block ml-4 font-medium'}`}>Overview</span>
							</Link>
						</li>
						<li>
							<Link href="/todos" className="flex p-3 hover:bg-slate-100 hover:border-r-2 hover:border-r-slate-200">
								<ListCheck size={24} />
								<span className={`${isSidebarOpen == true ? 'hidden' : 'inline-block ml-4 font-medium'}`}>Todos</span>
							</Link>
						</li>
						<li>
							<Link href="/links" className="flex p-3 hover:bg-slate-100 hover:border-r-2 hover:border-r-slate-200">
								<ListStars size={24} />
								<span className={`${isSidebarOpen == true ? 'hidden' : 'inline-block ml-4 font-medium'}`}>Links</span>
							</Link>
						</li>
						<li>
							<Link href="/api-keys" className="flex p-3 hover:bg-slate-100 hover:border-r-2 hover:border-r-slate-200">
								<Speedometer2 size={24} />
								<span className={`${isSidebarOpen == true ? 'hidden' : 'inline-block ml-4 font-medium'}`}>API-Keys</span>
							</Link>
						</li>
					</ul>
				</section>
			</aside>
			<header className={`App-header flex fixed top-0 w-screen p-2 bg-white shadow ${isSidebarOpen == true ? 'ml-16' : 'md:ml-64'}`}>
				<nav className="flex justify-between w-max">
					<span className="p-0">
						<Link href="/" className="md:hidden">
							<Image src={logoSrc} className="logo inline mx-2 -mt-1" alt="WebDev HQ Logo" />
							<span className={`${isSidebarOpen == true ? 'hidden' : ''}`}><span className="web text-2xl">Web</span><span className='dev-hq text-2xl font-medium'>Dev HQ</span></span>
						</Link>
						<button className="bg-slate-200 hidden md:inline hover:bg-slate-300 ml-3 mr-1 rounded p-2 pt-1" id="btn-sidebar-toggle" onClick={toggleSidebar}>
							{isSidebarOpen == true ? <TextIndentLeft size={24} /> : <TextIndentRight size={24} />}
						</button>
						<input type="search" name="search" className="p-2 border rounded-md ml-3 mt-1" placeholder="CTRL + K" />
					</span>
					<button className="fixed right-5 md:hidden bg-slate-200 rounded p-2"><Speedometer2 size={24} /></button>
					<ul className="hidden fixed right-5 md:inline-flex md:mt-1">
						<li>
							<button className="bg-slate-200 hover:bg-slate-300 mx-1 inline-flex p-3 rounded" onClick={toggleMegaMenu}>
								<Columns />
							</button>
							
							<div className={`mega-menu w-[720px] h-72 border rounded bg-white absolute top-12 right-1 shadow overflow-hidden ${isMegaMenuOpen == true ? 'grid grid-cols-3' : 'hidden'}`}>

								<div className="bg-blue-600 p-6">
									<h2 className="text-2xl mb-4 text-white">Explore the Dashboard</h2>
									<p className="text-white">Feel free to explore all features.</p>
								</div>
								<div className="p-6">
									<h2 className="text-2xl mb-4">Authentication</h2>
									<ul className="list-circle ml-4">
										<li><Link href="/login">Login</Link></li>
										<li><Link href="/register">Register</Link></li>
									</ul>
								</div>
								<div className="p-6">
									<h2 className="text-2xl mb-4">Pages</h2>
									<ul className="list-circle ml-4">
										<li><Link href="/about">About</Link></li>
										<li><Link href="/dislcaimer">Dislclaimer</Link></li>
										<li><Link href="/*">Error 404</Link></li>
									</ul>
								</div>

							</div>
						</li>
						<li>
							<button className="bg-slate-200 hover:bg-slate-300 mx-1 inline-flex p-3 rounded">
								<Flag />
							</button>
						</li>
						<li>
							<button className="bg-slate-200 hover:bg-slate-300 mx-1 inline-flex p-3 rounded">
								<Bell />
							</button>
						</li>
						<li>
							<button className="bg-slate-200 hover:bg-slate-300 mx-1 inline-flex p-3 rounded">
								<Envelope />
							</button>
						</li>
						<li>
							<button className="bg-slate-200 hover:bg-slate-300 mx-1 inline-flex p-3 rounded">
								<Gear />
							</button>
						</li>
						<li>
							<button className="bg-slate-200 hover:bg-slate-300 mx-1 inline-flex p-3 pb-2 rounded">
								<Person />
								<span className="-mt-1 mb-0 ml-2">User Account</span>
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default HeaderSidebar