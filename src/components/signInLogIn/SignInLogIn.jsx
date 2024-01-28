import React, { useState } from "react";
import "./signInLogIn.scss";

export default function SignInLogIn() {
  const [divSign, setDivSign] = useState(true);
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
                <input type="text" placeholder="First Name" />
              </div>
              <div className="signInInput">
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="signInInput">
                <input type="text" placeholder="Email" />
              </div>
              <div className="signInInput">
                <input type="text" placeholder="User Name" />
              </div>
              <div className="signInInput">
                <input type="password" placeholder="Password" />
              </div>
              <div className="signInButton">
                <button>SIGN IN</button>
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
                <input type="text" placeholder="User Name" />
              </div>
              <div className="logInInput">
                <input type="password" placeholder="Password" />
              </div>
              <div className="logInButton">
                <button>LOG IN</button>
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
