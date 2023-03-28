import React from 'react'
import { useRef, useState, useEffect, } from 'react'

import {Link } from 'react-router-dom'
import AppLogo from '../AppLogo'

function ForgotPassword(){

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
			<header className=" bg-black rounded flex justify-between">
				<AppLogo />
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
			<section className="bg-yellow-500 p-12 rounded">
				<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
				<h1 className="text-2xl mb-1">Passwort zurücksetzen</h1>
				<p className="mb-8">Bitte geben Sie Ihren Benutzernamen ein.</p>
				<form className="w-full" onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="username" className="flex text-2xl mb-2">E-Mail:</label>
						<input type="text" id="username" className="block p-3 text-2xl rounded w-full" autoComplete="off" placeholder="E-Mail Adresse" onChange={(e)=> setUser(e.target.value)} value={user} required />
					</div>

					<button className="rounded bg-teal-600 hover:bg-teal-700 px-3 p-4 text-2xl w-full text-white mb-12">Anmelden</button>
					<p className="mb-2">Zur <Link to="/auth/register/" className="underline underline-offset-2 hover:text-teal-700 mb-2" target="_blank">Registrierung</Link>.</p>
					<p>Zurück zum Login <Link to="/auth/login/" className="underline underline-offset-2 hover:text-teal-700" target="_self">Login</Link>.</p>
				</form>
			</section>
		</div>
	)
}

export default ForgotPassword