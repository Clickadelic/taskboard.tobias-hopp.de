import React from 'react'
import { useRef, useState, useEffect, } from 'react'

import {Link } from 'react-router-dom'
import AppLogo from '../AppLogo'

function Login(){

	const userRef = useRef('')
	const errRef = useRef('')

	const [user, setUser] = useState('')
	const [pwd, setPwd] = useState('')
	const [errMsg, setErrMsg] = useState('')

	const [success, setSuccess] = useState('')
	
	useEffect(() => {
		// userRef.current.focus()
	}, [])

	useEffect(() => {
		setErrMsg('')
	}, [user, pwd])

	const handleSubmit = async (e) => {
		e.preventDefault()
	}
	return(
		<div className="w-[600px] backdrop-blur-sm rounded p-12 m-auto">
			<header className="flex justify-center">
				<AppLogo />
			</header>
			<section className="bg-slate-300 p-12 rounded-bl rounded-br">
				<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
				<h1 className="text-2xl mb-4">Login</h1>
				<form className="w-full" onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="username" className="flex text-2xl mb-2">Benutzername:</label>
						<input type="text" id="username" className="block p-3 text-2xl rounded w-full" autoComplete="off" placeholder="Benutzername" onChange={(e)=> setUser(e.target.value)} value={user} required />
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="block text-2xl mb-2">Passwort:</label>
						<input type="password" id="password" className="block p-3 text-2xl rounded w-full mb-3" placeholder="Passwort" onChange={(e)=> setUser(e.target.value)} value={pwd} required />
					</div>
					<div className="my-8">  
						<div class="flex items-center mr-4 mb-2">  
							<input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" class="opacity-0 absolute h-8 w-8" />  
							<div class="bg-white border-2 rounded-md border-teal-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-teal-500">  
							<svg class="fill-current hidden w-3 h-3 text-teal-600 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">  
								<g fill="none" fill-rule="evenodd">  
								<g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">  
									<path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />  
								</g>  
								</g>  
							</svg>  
							</div>  
							<label for="A3-yes" class="select-none">Anmeldedaten speichern</label>  
						</div>  
					</div>
					<button className="rounded bg-teal-600 hover:bg-teal-700 px-3 p-4 text-2xl w-full text-white mb-12">Anmelden</button>
					<p className="mb-2">Ich habe mein <Link to="/auth/forgot-password" className="underline underline-offset-2 hover:text-teal-700 mb-2" target="_self">Passwort vergessen</Link>.</p>
					<p>Ich möchte mich <Link to="/auth/register/" className="underline underline-offset-2 hover:text-teal-700" target="_self">Registrieren</Link>.</p>
				</form>
			</section>
		</div>
	)
}

export default Login