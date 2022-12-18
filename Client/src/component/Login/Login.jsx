import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:5000/loginUser", {
      method: "POST",
      crossDomain: false,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./admin";
        } else {
          alert("Login incorreto.");
        }
      });
  };

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="register-login">
      <div className="register">
        <div className="login">
          <p className="title">Login</p>
          <div className="duo-input">
            <div className="input-field">
              <label className="input-text">
                Email
                <input onChange={handleEmail} value={email} />
              </label>
            </div>
            <div className="input-field">
              <label className="input-text">
                Password
                <input
                  type="password"
                  onChange={handlePassword}
                  value={password}
                />
              </label>
            </div>
          </div>
          <button onClick={handleLogin} className="bttn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
