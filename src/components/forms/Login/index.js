import React from 'react'
import { useRef, useState, useEffect, } from 'react'

function Login(){
	const userRef = useRef('')
	const errRef = useRef('')
	
	const [user, setUser] = useState('')
	const [pwd, setPwd] = useState('')
	const [errMsg, setErrMsg] = useState('')
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		userRef.current.focus();
	}, [])

	useEffect(() => {
		setErrMsg('')
	}, [user, pwd])

	function handleSubmit(){

	}
	return(
		<section className="bg-white p-4 rounded">
			<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
			<h1 className="text-2xl mb-3">Login</h1>
			<form className="w-full" onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="username" className="flex text-lg text-slate-700 font-bold mb-2">Username:</label>
					<input
						type="text"
						id="username"
						ref={userRef}
						autoComplete="off"
						onChange={(e)=> setUser(e.target.value)}
						className="block p-3 bg-slate-200 text-lg rounded w-full mb-3"
						value={user}
						placeholder="Username"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="password" className="flex text-lg text-slate-700 font-bold mb-2">Password:</label>
					<input
						type="password"
						id="password"
						ref={userRef}
						onChange={(e)=> setPwd(e.target.value)}
						className="block p-3 bg-slate-200 text-lg rounded w-full mb-3"
						value={pwd}
						placeholder="Password"
						required
					/>
				</div>
				<button className="rounded bg-sky-600 hover:bg-sky-700 p-2 text-lg w-full text-white">Anmelden</button>
			</form>
		</section>
	)
}

export default Login