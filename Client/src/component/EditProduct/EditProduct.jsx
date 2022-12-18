import React from "react";
import { Route, Routes } from "react-router-dom";
import MainItem from "../MainItem/MainItem";
import { useState } from "react";
import "./EditProduct.css";

const EditProduct = ({ product }) => {
  const [manageProducts, setmanageProducts] = useState(true);
  const [manageUsers, setmanageUsers] = useState(false);
  const [registerProducts, setregisterProducts] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [userName, setUserName] = useState("");
  const [productList, setProductList] = useState([]);

  //   const currentProduct = window.location.pathname.split("/").pop();

  function deleteProduct() {}

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  function handleStock(e) {
    setStock(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleImage(e) {
    setImage(e.target.value);
  }

  function deleteProduct() {
    fetch("http://localhost:5000/deleteProduct", {
      method: "POST",
      crossDomain: false,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <div className="edit">
        <forms>
          <p>Criar novo produto</p>
          <ul>
            <label>Nome</label>
            <li>
              <input value={name} onChange={handleName} type="text"></input>
            </li>
            <label>Descrição</label>
            <li>
              <input
                type="text"
                value={description}
                onChange={handleDescription}
              ></input>
            </li>

            <label>Quantidade</label>
            <li>
              <input type="number" value={stock} onChange={handleStock}></input>
            </li>
            <label>Preço</label>
            <li>
              <input type="number" value={price} onChange={handlePrice}></input>
            </li>
            <label>URL da Imagem</label>
            <li>
              <input type="text" value={image} onChange={handleImage}></input>
            </li>
            <button className="bttn">Criar Produto</button>
            <button className="X">X</button>
          </ul>
        </forms>
      </div>
    </div>
  );
};

export default EditProduct;
