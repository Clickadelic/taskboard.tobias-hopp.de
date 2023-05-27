import React from 'react'
import { useRef, useState, useEffect, } from 'react'

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
		<section className="bg-white p-4 rounded">
			<h1 className="text-2xl mb-4">Forgot Password</h1>
			<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
			<form className="w-full" onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="username" className="flex text-medium mb-2 font-bold">E-Mail:</label>
					<input type="text" id="username" className="block p-3 bg-slate-200 text-lg rounded w-full mb-3" autoComplete="off" placeholder="E-Mail Adresse" onChange={(e)=> setUser(e.target.value)} value={user} required />
				</div>
				<button className="rounded bg-sky-600 hover:bg-sky-700 p-2 text-lg w-full text-white">Passwort wiederherstellen</button>
			</form>
		</section>
	)
}

export default ForgotPassword