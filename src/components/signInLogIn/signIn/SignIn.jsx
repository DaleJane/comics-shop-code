import React, { useRef, useState, useEffect } from "react";
import "./signIn.scss";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../app/features/slices/logSignSlice";
import { Link } from "react-router-dom";

export default function SignIn() {
  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const dispatch = useDispatch();
  const signmessage = useSelector((state) => state.loginSignin.signMessage);
  // const logmessage = useSelector((state) => state.loginSignin.logMessage);
  // const allloggedin = useSelector((state) => state.loginSignin.loggedIn);
  const allSignedIn = useSelector((state) => state.loginSignin.allSignedIn);
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);
  // console.log("sign message", signmessage);
  // console.log("allSignedIn", allSignedIn);

  const userNameRef = useRef();
  const passwordRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("USERNAME PASS", user, pwd);
    setSuccess(true);
  };

  return (
    <div className="signWrapper">
      <div className="signHolder">
        <div className="shopBannerHolder">
          <div className="shopBanner">
            <h3>SIGN IN</h3>
          </div>
        </div>
        <div className="signInDetailsHolder">
          <div className="signInDetails">
            <div className="registerFormWrapper">
              {success ? (
                <div className="success">
                  <h1>Success!</h1>
                  <p>{signmessage}</p>
                  <p>
                    <Link to="/LogIn">Log In</Link>
                  </p>
                </div>
              ) : (
                <div className="registerFormHolder">
                  <form>
                    {/* username start */}
                    <label htmlFor="username">
                      Username:{" "}
                      <span
                        className={
                          validName &&
                          allSignedIn.find(
                            (userInDataDataBase) =>
                              userInDataDataBase.userName ===
                              userNameRef.current.value
                          )
                            ? "hide"
                            : validName
                            ? "valid"
                            : "hide"
                        }
                      >
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <span
                        className={
                          !user
                            ? "hide"
                            : validName &&
                              allSignedIn.find(
                                (userInDataDataBase) =>
                                  userInDataDataBase.userName ===
                                  userNameRef.current.value
                              )
                            ? "invalid"
                            : "hide"
                        }
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                    </label>
                    <div>
                      <input
                        type="text"
                        id="username"
                        ref={userNameRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                      />
                    </div>
                    <p
                      id="uidnote"
                      className={
                        userFocus && user && !validName
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <i className="fa-solid fa-circle-info"></i> 4 to 24
                      charaters.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>
                    <p
                      id="uidnote"
                      className={
                        validName &&
                        allSignedIn.find(
                          (userInDataDataBase) =>
                            userInDataDataBase.userName ===
                            userNameRef.current.value
                        )
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <i className="fa-solid fa-circle-info"></i> The username
                      is already in data base.
                      <br />
                      Try with another one
                    </p>
                    {/* username end*/}
                    {/* password start*/}
                    <label htmlFor="password">
                      Password:{" "}
                      <span className={validPwd ? "valid" : "hide"}>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                    </label>
                    <div>
                      <input
                        type={showPass === false ? "password" : "text"}
                        id="password"
                        ref={passwordRef}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                      />
                      <i
                        onClick={() => {
                          setShowPass((prev) => !prev);
                        }}
                        className={
                          showPass === false
                            ? "fa-solid fa-eye"
                            : "fa-solid fa-eye-slash"
                        }
                      ></i>
                    </div>
                    <p
                      id="pwdnote"
                      className={
                        pwdFocus && !validPwd ? "instructions" : "offscreen"
                      }
                    >
                      <i className="fa-solid fa-circle-info"></i> 8 to 24
                      charaters.
                      <br />
                      Must include uppercase and lowercase letters, a number and
                      a special character.
                      <br />
                      Allowed special characters:
                      <span aria-label="exclamation mark">!</span>
                      <span aria-label="at symbol">@</span>
                      <span aria-label="hashtag">#</span>
                      <span aria-label="dollar sign">$</span>
                      <span aria-label="percent">%</span>
                    </p>
                    {/* password end*/}
                    {/*confirm password start*/}
                    <label htmlFor="confirmPassword">
                      Confirm Password:{" "}
                      <span
                        className={validMatch && matchPwd ? "valid" : "hide"}
                      >
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <span
                        className={validMatch || !matchPwd ? "hide" : "invalid"}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                    </label>
                    <div>
                      <input
                        type={showConfPass === false ? "password" : "text"}
                        id="confirmPassword"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                      />
                      <i
                        onClick={() => {
                          setShowConfPass((prev) => !prev);
                        }}
                        className={
                          showConfPass === false
                            ? "fa-solid fa-eye"
                            : "fa-solid fa-eye-slash"
                        }
                      ></i>
                    </div>
                    <p
                      id="confirmnote"
                      className={
                        matchFocus && !validMatch ? "instructions" : "offscreen"
                      }
                    >
                      <i className="fa-solid fa-circle-info"></i> Must match the
                      first password input field.
                    </p>
                    {/*confirm password end*/}
                    <div className="signInbutton">
                      <button
                        disabled={
                          !validName ||
                          !validPwd ||
                          !validMatch ||
                          (validName &&
                            allSignedIn.find(
                              (userInDataDataBase) =>
                                userInDataDataBase.userName ===
                                userNameRef.current.value
                            ))
                            ? true
                            : false
                        }
                        onClick={(e) => {
                          handleSubmit(e);
                          {
                            dispatch(
                              signIn({
                                userName: userNameRef.current.value
                                  .replace(/\s/g, "")
                                  .trim(),
                                password: passwordRef.current.value
                                  .replace(/\s/g, "")
                                  .trim(),
                                loggedIn: false,
                              })
                            );
                          }
                        }}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                  <div className="moveToLogIn">
                    <p>Already registered? </p>
                    <Link to="/LogIn">LOG IN</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
