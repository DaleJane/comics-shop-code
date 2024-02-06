import React, { useRef, useState } from "react";
import "./signInLogIn.scss";
import { useDispatch, useSelector } from "react-redux";
import { signIn, logIn } from "../../app/features/slices/logSignSlice";

export default function SignInLogIn() {
  const dispatch = useDispatch();
  const signmessage = useSelector((state) => state.loginSignin.signMessage);
  const logmessage = useSelector((state) => state.loginSignin.logMessage);
  const allloggedin = useSelector((state) => state.loginSignin.loggedIn);
  const [divSign, setDivSign] = useState(true);
  const [showPass, setShowPass] = useState(false);

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const userName = useRef();
  const password = useRef();
  const logUserName = useRef();
  const logPassword = useRef();

  const resetSignRef = () => {
    firstName.current.value = "";
    lastName.current.value = "";
    email.current.value = "";
    userName.current.value = "";
    password.current.value = "";
  };
  const resetLogRef = () => {
    logUserName.current.value = "";
    logPassword.current.value = "";
  };

  return (
    <div className="signLogWrapper">
      <div className="signLogHolder">
        <div className="shopBannerHolder">
          <div className="shopBanner">
            {divSign === true ? <h3>SIGN IN</h3> : <h3>LOG IN</h3>}
          </div>
        </div>
        <div className="signInDetailsHolder">
          {divSign === true ? (
            <div className="signInDetails">
              <div className="signInInput">
                <input type="text" placeholder="First Name" ref={firstName} />
              </div>
              <div className="signInInput">
                <input type="text" placeholder="Last Name" ref={lastName} />
              </div>
              <div className="signInInput">
                <input type="text" placeholder="Email" ref={email} />
              </div>
              <div className="signInInput">
                <input type="text" placeholder="User Name" ref={userName} />
              </div>
              <div className="signInInput">
                <input
                  type={showPass === false ? "password" : "text"}
                  placeholder="Password"
                  ref={password}
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
              <div className="signInButton">
                <button
                  onClick={() => {
                    {
                      dispatch(
                        signIn({
                          firstName: firstName.current.value
                            .replace(/\s/g, "")
                            .trim(),
                          lastName: lastName.current.value
                            .replace(/\s/g, "")
                            .trim(),
                          email: email.current.value.replace(" ", "").trim(),
                          userName: userName.current.value
                            .replace(/\s/g, "")
                            .trim(),
                          password: password.current.value
                            .replace(/\s/g, "")
                            .trim(),
                          loggedIn: false,
                        })
                      );
                      resetSignRef();
                    }
                  }}
                >
                  SIGN IN
                </button>
              </div>
              <div className="statusMessage">
                <p>{signmessage}</p>
              </div>
              <div className="moveToLogIn">
                <p>
                  <strong>Already have account?</strong>
                  <br />
                  Go to{" "}
                  <span
                    onClick={() => {
                      setDivSign(false);
                    }}
                  >
                    LOG IN
                  </span>{" "}
                  and start shopping.
                </p>
              </div>
            </div>
          ) : (
            <div className="logInDetails">
              <div className="logInInput">
                <input
                  disabled={allloggedin.length > 0 ? true : false}
                  type="text"
                  placeholder="User Name"
                  ref={logUserName}
                />
              </div>
              <div className="logInInput">
                <input
                  disabled={allloggedin.length > 0 ? true : false}
                  type={showPass === false ? "password" : "text"}
                  placeholder="Password"
                  ref={logPassword}
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
              <div className="logInButton">
                <button
                  onClick={() => {
                    {
                      dispatch(
                        logIn({
                          logUserName: logUserName.current.value
                            .replace(/\s/g, "")
                            .trim(),
                          logPassword: logPassword.current.value
                            .replace(/\s/g, "")
                            .trim(),
                        })
                      );
                      resetLogRef();
                    }
                  }}
                >
                  LOG IN
                </button>
              </div>
              <div className="statusMessage">
                <p>{logmessage}</p>
              </div>
              <div className="moveToSignIn">
                <p>
                  <strong>Don't have account?</strong>
                  <br />
                  Go to{" "}
                  <span
                    onClick={() => {
                      setDivSign(true);
                    }}
                  >
                    SIGN IN
                  </span>{" "}
                  and register.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
