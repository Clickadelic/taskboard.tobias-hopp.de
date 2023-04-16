import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../../api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
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
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
            setMatchPwd('');
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
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section className="bg-white p-4 rounded">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className="text-2xl mb-3">Register</h1>
                    <form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label htmlFor="username" className="flex text-lg text-slate-700 font-bold mb-2">
								Username:
								<FontAwesomeIcon icon={faCheck} className={validName ? "block mx-2 mt-1 text-green-300" : "hidden"} />
								<FontAwesomeIcon icon={faTimes} className={validName || !user ? "hidden" : "block mx-2 mt-1 text-red-300"} />
							</label>
							<input
								type="text"
								id="username"
								ref={userRef}
								autoComplete="off"
								onChange={(e) => setUser(e.target.value)}
								value={user}
								required
								aria-invalid={validName ? "false" : "true"}
								aria-describedby="uidnote"
								onFocus={() => setUserFocus(true)}
								onBlur={() => setUserFocus(false)}
								className="block p-3 bg-slate-200 text-lg rounded w-full mb-3"
							/>
							<p id="uidnote" className={userFocus && user && !validName ? "block p-2 rounded bg-red-100" : "hidden"}>
								<FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
								4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.
							</p>
						</div>

                        <label htmlFor="password" className="flex text-lg text-slate-700 font-bold mb-2">
                            Password:
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


                        <label htmlFor="confirm_pwd"  className="flex text-lg text-slate-700 font-bold mb-2">
                            Confirm Password:
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
							className="block p-3 text-lg bg-slate-200 rounded w-full mb-3"
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "block" : "hidden"}>
                            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                            Must match the first password input field.
                        </p>
                        <button disabled={!validName || !validPwd || !validMatch ? true : false} className="bg-blue-600 p-3 rounded mt-4 w-full text-white">Register</button>
                    </form>
                </section>
            )}
        </>
    )
}

export default Register
