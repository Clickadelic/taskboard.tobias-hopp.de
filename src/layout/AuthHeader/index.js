import React from "react";
import { useNavigate } from "react-router-dom";

const AuthHeader = () => {

    const navigate = useNavigate();
    // const logout = () => {
    //     localStorage.clear();
    //     navigate('/auth/login');
    // }

    return (
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
    );
}

export default AuthHeader;