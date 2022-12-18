import React, { useState } from "react";
import "./RegLogForms.css";

const RegLogForms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("entrou no post");
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: false,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        address,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          window.location.href = "./admin";
        }
      });
  };

  // Login Functionality
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  function handleName(e) {
    setName(e.target.value);
    setSubmitted(false);
  }
  function handleAddress(e) {
    setAddress(e.target.value);
    setSubmitted(false);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
    setSubmitted(false);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
    setSubmitted(false);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
    setSubmitted(false);
  }
  function handleEmailLogin(e) {
    setEmailLogin(e.target.value);
    setSubmitted(false);
  }
  function handlePasswordLogin(e) {
    setPasswordLogin(e.target.value);
    setSubmitted(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      address === "" ||
      phone === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  }

  function handleAlert() {
    alert("Abacate");
    return;
  }

  return (
    <div className="register-login">
      <div className="register">
        <p className="title">Register</p>
        <div className="duo-input">
          <div className="input-field">
            <label className="input-text">
              Name
              <input onChange={handleName} value={name} className="" />
            </label>
          </div>
          <div className="input-field">
            <label className="input-text">
              Address
              <input onChange={handleAddress} value={address} className="" />
            </label>
          </div>
        </div>
        <div className="duo-input">
          <div className="input-field">
            <label className="input-text">
              Email
              <input onChange={handleEmail} value={email} className="" />
            </label>
          </div>
          <div className="input-field">
            <label className="input-text">
              Phone
              <input onChange={handlePhone} value={phone} className="" />
            </label>
          </div>
        </div>
        <div className="duo-input">
          <div className="input-field">
            <label className="input-text">
              Password
              <input
                type="password"
                onChange={handlePassword}
                value={password}
                className=""
              />
            </label>
          </div>
        </div>
        <button onClick={onSubmit} className="bttn">
          Register
        </button>
        <div className="login">
          <p className="title">teste</p>

          {/* <div className="duo-input">
            <div className="input-field">
              <label className="input-text">
                Email
                <input onChange={handleEmailLogin} value={emailLogin} className="" />
              </label>
            </div>
            <div className="input-field">
              <label className="input-text">
                Password
                <input  type="password" onChange={handlePasswordLogin} value={passwordLogin} className="" />
              </label>
            </div>
          </div>
          <button onClick={handleAlert} className="bttn">Login</button> */}
        </div>
      </div>
    </div>
  );
};

export default RegLogForms;
