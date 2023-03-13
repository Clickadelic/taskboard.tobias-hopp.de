import React from 'react'
import { useRef, useState, useEffect, } from 'react'
import {Link } from 'react-router-dom'
import logoSrc from '../../static/images/bcl/bcl-on-site-logo.png'

function Register(){

	const userRef = useRef('')
	const errRef = useRef('')

	const [user, setUser] = useState('')
	const [pwd, setPwd] = useState('')
	const [pwdRepeat, setPwdRepeat] = useState('')
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
			<header className=" bg-black rounded flex justify-between">
				<img src={logoSrc} className="flex" alt="" />
				<button onClick={() => alert("Clicked Help")} className="top-0 right-2 border mb-2 border-slate-400 text-white w-24 flex flex-col">
					<span className="block m-auto mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
							<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
						</svg>
					</span>
					<span className="block m-auto">Hilfe</span>
				</button>
			</header>
			<section className="bg-yellow-400 p-12 rounded">
				<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
				<h1 className="text-2xl mb-1">Registrieren</h1>
				<p className="mb-8">Bitte registrieren Sie sich mit Ihrer E-Mail Adresse und einem Passwort. Ein Administrator wird Sie freischalten.</p>
				<form className="w-full" onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="username" className="flex text-2xl mb-2">Benutzername:</label>
						<input type="text" id="username" className="block p-3 text-2xl rounded w-full" autoComplete="off" placeholder="Benutzername" onChange={(e)=> setUser(e.target.value)} value={user} required />
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="block text-2xl mb-2">Passwort:</label>
						<input type="password" id="password" className="block p-3 text-2xl rounded w-full mb-3" placeholder="Passwort" onChange={(e)=> setUser(e.target.value)} value={pwd} required />
					</div>
					<div className="mb-4">
						<label htmlFor="password-repeat" className="block text-2xl mb-2">Passwort Wiederholung:</label>
						<input type="password" id="password-repeat" className="block p-3 text-2xl rounded w-full mb-3" placeholder="Passwort Wiederholung" onChange={(e)=> setUser(e.target.value)} value={pwdRepeat} required />
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
					<button className="rounded bg-teal-600 hover:bg-teal-700 px-3 p-4 text-2xl w-full text-white mb-12">Registrieren</button>
					<p className="mb-2">Ich habe mein <Link to="https://www.example.com" className="underline underline-offset-2 hover:text-teal-700 mb-2" target="_blank">Passwort vergessen</Link>.</p>
					<p>Ich möchte zur <Link to="/auth/login/" className="underline underline-offset-2 hover:text-teal-700" target="_self">Anmelden</Link>.</p>
				</form>
			</section>
		</div>
	)
}

export default Register