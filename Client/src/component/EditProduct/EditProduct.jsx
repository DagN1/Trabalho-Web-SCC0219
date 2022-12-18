import React from "react";
import { Route, Routes } from "react-router-dom";
import MainItem from "../MainItem/MainItem";
import { useState } from "react";
import "./EditProduct.css";

const EditProduct = ({ product }) => {
  const [manageProducts, setmanageProducts] = useState(true);
  const [manageUsers, setmanageUsers] = useState(false);
  const [registerProducts, setregisterProducts] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [stock, setStock] = useState(product.stock);
  const [image, setImage] = useState(product.image);
  const [userName, setUserName] = useState("");
  const [productList, setProductList] = useState([]);

  //   const currentProduct = window.location.pathname.split("/").pop();

  // function handleDeleteProduct() {}

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

  function deleteProduct(e) {
    e.preventDefault();
    console.log("entrando no fetch delete");
    fetch("http://localhost:5000/deleteProduct/"+product._id, {
      method: "POST",
      crossDomain: false,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        _id: [product._id],
      }),
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
          <p>Editar Produto</p>
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
            <button className="bttn">Editar</button>
            <button className="bttn" onClick={deleteProduct}>Excluir</button>
          </ul>
        </forms>
      </div>
    </div>
  );
};

export default EditProduct;
