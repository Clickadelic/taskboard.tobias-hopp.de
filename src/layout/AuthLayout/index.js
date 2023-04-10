import React from "react";
import logoSrc from "../../static/images/bcl/bcl_logo.png"

const AuthLayout = () => {
    return (
		<>
			<aside class="App-sidebar Auth-Sidebar hidden md:block fixed top-0 left-0 w-64 min-h-screen bg-white shadow">
				<div class="App-sidebar-logo flex justify-center px-2 py-3">
					<h1 class="text-2xl">
						<img src={logoSrc} class="logo inline mr-2 -mt-1" alt="BCL Logo" />
						<span className="inline font-medium">Company Name</span>
					</h1>
				</div>
				<section class="sidebar-section mt-10 mb-6">
					<h2 class="text-1xl font-medium mx-5 my-3 flex">
						
						<span className="mt-1">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-houses" viewBox="0 0 16 16">
								<path d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708L5.793 1Zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207l-4.5-4.5Z"/>
							</svg>
						</span>
						<span className="inline-block ml-3">
							Projekte
						</span>
					</h2>
					<ul class="sidebar-nav">
						<li><a href="/projekte" class="block px-4 py-2 hover:bg-slate-100 hover:border-r-2 border-slate-400">Projektübersicht</a></li>
						<li><a href="/" class="block px-4 py-2 hover:bg-slate-100 hover:border-r-2 border-slate-400">Projektübersicht</a></li>
						<li><a href="/" class="block px-4 py-2 hover:bg-slate-100 hover:border-r-2 border-slate-400">Projektübersicht</a></li>
						<li><a href="/" class="block px-4 py-2 hover:bg-slate-100 hover:border-r-2 border-slate-400">Projektübersicht</a></li>
					</ul>
				</section>
				<section class="sidebar-section mt-10 mb-6">
					<h2 class="text-1xl font-medium mx-5 my-3 flex">
						<span className="mt-1">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
								<path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
								<path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
							</svg>
						</span>
						<span className="inline-block ml-3">
							Unternehmen
						</span>
					</h2>
					<ul class="sidebar-nav">
						<li><a href="/projekte" class="block px-4 py-2 hover:bg-slate-100 hover:border-r-2 border-slate-400">Projektübersicht</a></li>
						<li><a href="/" class="block px-4 py-2 hover:bg-slate-100 hover:border-r-2 border-slate-400">Projektübersicht</a></li>
						<li><a href="/" class="block px-4 py-2 hover:bg-slate-100 hover:border-r-2 border-slate-400">Projektübersicht</a></li>
						<li><a href="/" class="block px-4 py-2 hover:bg-slate-100 hover:border-r-2 border-slate-400">Projektübersicht</a></li>
					</ul>
				</section>
				<section class="sidebar-section mt-10 mb-6">
					<h2 class="text-1xl font-medium mx-5 my-3 flex">
						<span className="mt-1">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
								<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
								<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
							</svg>
						</span>
						<span className="inline-block ml-3">
							Verwaltung
						</span>
					</h2>
					<ul class="sidebar-nav">
						<li><a href="/projekte" class="block px-4 py-2 hover:bg-slate-100 hover:border-r-2 border-slate-400">Mindestlohndokumente</a></li>
						<li><a href="/" class="block px-4 py-2 hover:bg-slate-100 hover:border-r-2 border-slate-400">Systemnutzer Übersicht</a></li>
						<li><a href="/" class="block px-4 py-2 hover:bg-slate-100 hover:border-r-2 border-slate-400">Zugriffs-Kontrolleinheiten</a></li>
					</ul>
				</section>
			</aside>
			<header class="App-header flex fixed top-0 md:ml-64 w-screen p-2 bg-white shadow">
				<nav class="flex justify-between w-max">
					<span class="p-0">
						<a href="/" class="md:hidden"><img src="#" class="logo inline mx-2 -mt-1" alt="WebDev HQ Logo" /></a>
						<button class="bg-slate-200 hidden md:inline hover:bg-slate-300 ml-3 mr-1 rounded p-2 pt-2" id="btn-sidebar-toggle">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-text-indent-right" viewBox="0 0 16 16">
								<path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
							</svg>
						</button>

						{/* This can be done better with CSS */}
						<input type="search" name="search" class="search-input-mobile md:hidden p-2 border rounded-md ml-3 mt-1" placeholder="Search" />
						<input type="search" name="search" class="search-input-desktop hidden md:inline p-2 border rounded-md ml-3 mt-1" placeholder="Search / CTRL + K" />
					</span>
					<button class="fixed right-5 md:hidden bg-slate-200 rounded p-2">SVG</button>
					<ul class="hidden fixed right-5 md:inline-flex md:mt-1">
						<li>
							<button class="bg-slate-200 mx-2 inline-flex p-3 rounded">
								SVG
							</button>
						</li>
						<li>
							<button class="bg-slate-200 mx-2 inline-flex p-3 rounded">
								SVG
							</button>
						</li>
						<li>
							<button class="bg-slate-200 mx-2 inline-flex p-3 rounded">
								SVG
							</button>
						</li>
						<li>
							<button class="bg-slate-200 mx-2 inline-flex p-3 rounded">
								SVG
							</button>
						</li>
						<li>
							<button class="bg-slate-200 mx-2 inline-flex p-3 rounded">
								SVG
							</button>
						</li>
						<li>
							<button class="bg-slate-200 mx-2 inline-flex p-3 rounded">
								SVG
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
    );
}

export default AuthLayout;