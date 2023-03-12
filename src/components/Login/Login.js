import React from 'react'
import { useRef, useState, useEffect, } from 'react'

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
		<section className="w-72 p-5 bg-slate-100 rounded m-auto mt-12">
			<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
			<h1 className="text-2xl mb-3">Login</h1>
			<form className="w-full" onSubmit={handleSubmit}>
				<label htmlFor="username" className="block">Username:</label>
				<input type="text" id="username" className="block p-2 rounded w-full" autoComplete="off" onChange={(e)=> setUser(e.target.value)} value={user} required />
				<label htmlFor="password" className="block">Password:</label>
				<input type="password" id="password" className="block p-2 rounded w-full mb-3" onChange={(e)=> setUser(e.target.value)} value={pwd} required />
				<button className="rounded bg-sky-600 px-3 py-2 w-full text-white">Login</button>
				<p>Don't have an account?<br />
					<span className="line">
						<a href="https://www.example.com">Register</a>
					</span>
				</p>
			</form>
		</section>
	)
}

export default Login