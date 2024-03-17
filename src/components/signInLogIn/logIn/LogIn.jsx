import React, { useRef, useState } from "react";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../app/features/slices/logSignSlice";

export default function LogIn() {
  const dispatch = useDispatch();
  const logmessage = useSelector((state) => state.loginSignin.logMessage);
  // const allloggedin = useSelector((state) => state.loginSignin.loggedIn);
  const [showLogPass, setShowLogPass] = useState(false);

  let logUserName = useRef();
  let logPassword = useRef();

  const resetRefs = () => {
    logUserName.current.value = "";
    logPassword.current.value = "";
  };

  return (
    <div className="logInWrapper">
      <div className="logInHolder">
        <div className="shopBannerHolder">
          <div className="shopBanner">
            <h3>SIGN IN</h3>
          </div>
        </div>
        <div className="logInHolder">
          <div className="logInDetails">
            <form>
              <label htmlFor="username">Username: </label>
              <div className="logInInput">
                <input id="username" type="text" ref={logUserName} />
              </div>
              <label htmlFor="pass">Password: </label>
              <div className="logInInput">
                <input
                  id="pass"
                  type={showLogPass === false ? "password" : "text"}
                  ref={logPassword}
                />
                <i
                  onClick={() => {
                    setShowLogPass((prev) => !prev);
                  }}
                  className={
                    showLogPass === false
                      ? "fa-solid fa-eye"
                      : "fa-solid fa-eye-slash"
                  }
                ></i>
              </div>
              <div className="logInButton">
                <button
                  onClick={(e) => {
                    e.preventDefault();
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
                    }
                    resetRefs();
                  }}
                >
                  LOG IN
                </button>
              </div>
              <div className="statusMessage">
                <p>{logmessage}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
