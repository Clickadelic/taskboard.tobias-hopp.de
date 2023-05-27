import React from 'react'
import { useRef, useState, useEffect, } from 'react'

function Login(){

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {

	}, [])

	useEffect(() => {
		
	}, [username, password])

	// Input fields
	const [inputs, setInputs] = useState({})

	const handleSubmit = (e) => {
		e.preventDefault();
		const myRegisterRequest = fetch(process.env.REACT_APP_API_URL, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(inputs),
		})
	}

	const handleChange = (e) => {
		// Simple Obj[key] => Obj[value]
		const name = e.target.name;
		// Ternary/If ...then Simple Obj[key] => Obj[value]
		const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		setInputs((prevState) => ({ ...prevState, [name]: value }));
		console.log(inputs);
	}
	return(
		<section className="bg-white p-12 rounded">
			{/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
			<form className="w-full" onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="username" className="flex text-lg text-slate-700 mb-2">Username:</label>
					<input type="text" onChange={handleChange} name="username" id="username" className="block p-3 text-lg rounded w-full" autoComplete="off" placeholder="Username" onChange={(e)=> setUsername(e.target.value)} value={username} required />
				</div>
				<div className="mb-4">
					<label htmlFor="password" className="flex text-lg text-slate-700 mb-2">Passwort:</label>
					<input type="password" onChange={handleChange} id="password" className="block p-3 text-lg rounded w-full mb-3" placeholder="Passwort" onChange={(e)=> setPassword(e.target.value)} value={password} required />
				</div>
				<div className="mb-4">  
					<div className="flex items-center mr-4 mb-2">  
						<input type="checkbox" onChange={handleChange} id="save-password" name="save-password" value="yes" className="opacity-0 absolute h-8 w-8" />  
						<div className="bg-white border-2 rounded-md border-sky-600 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-sky-500">  
							<svg className="fill-current hidden w-3 h-3 text-sky-600 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">  
								<g fill="none" fillRule="evenodd">  
									<g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">  
										<path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />  
									</g>  
								</g>  
							</svg>  
						</div>  
						<label htmlFor="save-password" className="select-none">Anmeldedaten speichern</label>  
					</div>  
				</div>
				<button className="rounded bg-sky-600 hover:bg-sky-700 p-2 text-lg w-full text-white">Anmelden</button>
			</form>
		</section>
	)
}

export default Login