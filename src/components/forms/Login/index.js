import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
	const userRef = useRef('');
	const pwdRef = useRef('');

	const [user, setUser] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const credentials = {
		username: user,
		password: pwd,
	};

	try {
		const res = await fetch(
		"https://api.tobias-hopp.de/common/v1/login", {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(credentials)
		});
		const response = await res.json();
		if (res.status === 200) {
			localStorage.setItem('token', response.token);
			setUser('');
    		setPwd('');
			setSuccess(true);
			setTimeout(() => {
				navigate('/');
			}, 1000)
		} else if(res.status === 400) {
			setErrMsg('Invalid Credentials. Please try again.');
		}
	} catch (err) {
		setErrMsg(err)
	}
		setUser('');
		setPwd('');
	};

  return (
    <>
      {success ? (
        <section>
          <div className="bg-white p-4 rounded">Success</div>
        </section>
      ) : (
        <section className="bg-white p-4 rounded">
          <p
            ref={userRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h2 className="text-2xl mb-3">Login</h2>
          <form className="w-full mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="flex text-lg text-slate-700 font-bold mb-2"
              >
                Benutzername:
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                className="block p-3 bg-slate-200 text-lg rounded w-full mb-3"
                value={user}
                placeholder="Benutzername"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="flex text-lg text-slate-700 font-bold mb-2"
              >
                Passwort:
              </label>
              <input
                type="password"
                id="password"
                ref={pwdRef}
                onChange={(e) => setPwd(e.target.value)}
                className="block p-3 bg-slate-200 text-lg rounded w-full mb-3"
                value={pwd}
                placeholder="Passwort"
                required
              />
            </div>
            <button className="rounded bg-sky-600 hover:bg-sky-700 p-2 text-lg w-full text-white">
              Anmelden
            </button>
			</form>
			<p>Noch kein Account? Hier <a href="/auth/register">registrieren</a>.</p>
		</section>
		)
			
		}
		
		</>
	)
}

export default Login