import React, { useState } from "react";
import "./Authentication.css";
import Login from "./Login";
import Signup from "./Signup";

function Authentication() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  }

  return (
    <div className="authentication">
      <div className="auth__left">
        <img
          src="https://images.unsplash.com/photo-1698725223016-03479bfd52e4?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="auth__right">
        {/* <Login /> */}
        {/* <Signup /> */}
        {active === "login" ? (<> <Login/> </>): (<> <Signup/> </>)}

        <div className="auth__more">
          {active === "login" ? (
            <>
              {" "}
              <span>
                Dont't Have an account ? <button onClick={handleChange} >Sign Up</button>
              </span>{" "}
            </>
          ) : (
            <>
              <span>
                Have an account ? <button onClick={handleChange} >Log In</button>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Authentication;
