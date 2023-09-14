import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
	const navigate = useNavigate()
    const userRef = useRef();
    const errRef = useRef();
	
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);



    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
		
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
		const credentials = {
			username: user,
			password: pwd,
			password_repeat: matchPwd
		}
        try {
            const result = fetch("https://api.tobias-hopp.de/common/v1/auth/register", {
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(credentials)
			}).then(response => {
				// handle the response
				if(response.status === 201) {
					setSuccess(true)
					console.log(response)
					navigate('/')
				} else if(response.status === 400) {
					alert("Error")
				}
			})
			.catch(error => {
				// handle the error
				console.log(error)
			})
			console.log(result)
            setUser('')
            setPwd('')
            setMatchPwd('')
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section className="bg-white p-4">
                    <div className="bg-green-200 p-3 rounded">
						<h2 className="text-base font-bold">Registrierung erfolgreich!</h2>
					</div>
                </section>
            ) : (
				<section className="bg-white p-4 rounded">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h2 className="text-2xl mb-3">Registrierung</h2>
                    <form onSubmit={handleSubmit} className="mb-4">
						<div className="mb-4">
							<label htmlFor="username" className="flex text-lg text-slate-700 font-bold mb-2">
								Benutzername:
								<FontAwesomeIcon icon={faCheck} className={validName ? "block mx-2 mt-1 text-green-300" : "hidden"} />
								<FontAwesomeIcon icon={faTimes} className={validName || !user ? "hidden" : "block mx-2 mt-1 text-red-300"} />
							</label>
							<input
								type="text"
								id="username"
								ref={userRef}
								autoComplete="off"
								onChange={(e) => setUser(e.target.value)}
								required
								aria-invalid={validName ? "false" : "true"}
								aria-describedby="uidnote"
								onFocus={() => setUserFocus(true)}
								onBlur={() => setUserFocus(false)}
								placeholder="Benutzername"
								className="block p-3 bg-slate-200 text-lg rounded w-full mb-3"
							/>
							<p id="uidnote" className={userFocus && user && !validName ? "block p-2 rounded bg-red-100" : "hidden"}>
								<FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
								4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.
							</p>
						</div>
						<div className="mb-4">
							<label htmlFor="password" className="flex text-lg text-slate-700 font-bold mb-2">
								Passwort:
								<FontAwesomeIcon icon={faCheck} className={validPwd ? "block text-green-300 mt-1 mx-2" : "hidden"} />
								<FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hidden" : "block text-red-500 mt-1 mx-2"} />
							</label>
							<input
								type="password"
								id="password"
								onChange={(e) => setPwd(e.target.value)}
								value={pwd}
								required
								aria-invalid={validPwd ? "false" : "true"}
								aria-describedby="pwdnote"
								onFocus={() => setPwdFocus(true)}
								onBlur={() => setPwdFocus(false)}
								placeholder="Passwort"
								className="block p-3 text-lg bg-slate-200 rounded w-full mb-3"
							/>
							<p id="pwdnote" className={pwdFocus && !validPwd ? "block p-2 bg-slate-200" : "hidden"}>
								<FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
								8 to 24 characters.<br />
								Must include uppercase and lowercase letters, a number and a special character.<br />
								Allowed special characters:
								<span aria-label="exclamation mark">!</span>
								<span aria-label="at symbol">@</span>
								<span aria-label="hashtag">#</span>
								<span aria-label="dollar sign">$</span>
								<span aria-label="percent">%</span>
							</p>
						</div>
						<div className="mb-4">
							<label htmlFor="confirm_pwd"  className="flex text-lg text-slate-700 font-bold mb-2">
								Passwort Best&auml;tigung:
								<FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "block text-green-300 mt-1 mx-2" : "hidden"} />
								<FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hidden" : "block mt-1 mx-2 text-red-500"} />
							</label>
							<input
								type="password"
								id="confirm_pwd"
								onChange={(e) => setMatchPwd(e.target.value)}
								value={matchPwd}
								required
								aria-invalid={validMatch ? "false" : "true"}
								aria-describedby="confirmnote"
								onFocus={() => setMatchFocus(true)}
								onBlur={() => setMatchFocus(false)}
								placeholder="Passwort Wiederholung"
								className="block p-3 text-lg bg-slate-200 rounded w-full mb-3"
							/>
							<p id="confirmnote" className={matchFocus && !validMatch ? "block" : "hidden"}>
								<FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
								Must match the first password input field.
							</p>
						</div>
                        <button disabled={!validName || !validPwd || !validMatch ? true : false} className="rounded bg-sky-600 hover:bg-sky-700 p-2 text-lg w-full text-white">Registrieren</button>
                    </form>
					<p>Bereits registriert? Hier <a href="/auth/login">einloggen</a>.</p>
                </section>
            )}
        </>
    )
}

export default Register
