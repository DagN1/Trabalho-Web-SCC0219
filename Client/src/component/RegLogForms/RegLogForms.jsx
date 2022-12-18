import React, { useState } from "react";
import "./RegLogForms.css";

const RegLogForms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

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
        console.log(data.status, "status");
        if (data.status == "ok") {
          window.location.href = "./Login";
        }
      });
  };

  function handleName(e) {
    setName(e.target.value);
  }
  function handleAddress(e) {
    setAddress(e.target.value);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
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
        <div>
          <p>Já tem cadastro? Faça</p>
          <a href="http://localhost:3000/Login" className="loginBttn">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegLogForms;
