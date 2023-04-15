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
		<section className="bg-white p-12 rounded">
			<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
			<form className="w-full" onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="username" className="flex text-medium mb-2">E-Mail:</label>
					<input type="text" id="username" className="block p-3 text-medium rounded w-full" autoComplete="off" placeholder="E-Mail Adresse" onChange={(e)=> setUser(e.target.value)} value={user} required />
				</div>
				<button className="rounded bg-blue-600 hover:bg-blue-700 px-3 p-4 text-medium w-full text-white">Passwort wiederherstellen</button>
			</form>
		</section>
	)
}

export default ForgotPassword