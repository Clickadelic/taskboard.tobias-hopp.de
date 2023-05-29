import React from 'react'
import {  useState } from 'react'
import {Link} from 'react-router-dom'

function ForgotPassword(){

	const [email, setEmail] = useState('')
	
	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(email)
	}
	return(
		<section className="bg-white p-4 rounded">
			<h2 className="text-2xl mb-4">Forgot Password</h2>
			<form className="w-full mb-4" onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="username" className="flex text-medium mb-2 font-bold">E-Mail:</label>
					<input type="text" id="username" className="block p-3 bg-slate-200 text-lg rounded w-full mb-3" autoComplete="off" placeholder="E-Mail Adresse" onChange={(e)=> setEmail(e.target.value)} required />
				</div>
				<button className="rounded bg-sky-600 hover:bg-sky-700 p-2 text-lg w-full text-white">Passwort wiederherstellen</button>
			</form>
			<p>zurück <a href="/auth/login">zum Login</a></p>
		</section>
	)
}

export default ForgotPassword