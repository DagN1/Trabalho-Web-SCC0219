import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import cart from "../../images/cart.png";
import profileIcon from "../../images/profileicon.png";

const Header = () => {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState("");
  const [name, setName] = useState("");

  fetch("http://localhost:5000/userData", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      token: window.localStorage.getItem("token"),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setName(data.data.name);
    });

  const handleLogoClick = () => {
    return navigate(`/`);
  };
  const handleCartClick = () => {
    return navigate(`/shoppingCart`);
  };
  const handleProfileClick = () => {
    return navigate(`/register`);
  };

  const handleInputChange = (event) => {
    /*alert(event.target.value)*/
    setInputData(event.target.value);
  };

  const handleSearch = () => {
    if (inputData !== "") return navigate(`/search/${inputData}`);
  };

  return (
    <div className="barra">
      <p onClick={handleLogoClick}>
        <img className="logo" src={logo} alt="" />
      </p>
      <div className="texto">
        <p>The Clothes Store</p>
      </div>
      <div className="userIdentification">
        Bem-vindo{" "}
        {name == "admin" ? (
          <a href="http://localhost:3000/Admin">Admin</a>
        ) : (
          <p>{name}</p>
        )}
      </div>
      <form className="input" onSubmit={handleSearch}>
        <input value={inputData} type="text" onChange={handleInputChange} />
      </form>
      <p onClick={handleCartClick}>
        <img className="img" src={cart} alt="" />
      </p>
      <p onClick={handleProfileClick} type="submit">
        <img className="img" src={profileIcon} alt="" />
      </p>
    </div>
  );
};

export default Header;
