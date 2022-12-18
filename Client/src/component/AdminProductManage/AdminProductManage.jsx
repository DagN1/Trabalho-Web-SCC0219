import React, { useState, useEffect } from "react";
import AdminUserItem from "../AdminUserItem/AdminUserItem";
import "./AdminProductManage.css";
import AdminProductItem from "../AdminProductItem/AdminProductItem";

const AdminProductManage = (productList) => {
  const [manageProducts, setmanageProducts] = useState(true);
  const [manageUsers, setmanageUsers] = useState(false);
  const [registerProducts, setregisterProducts] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [userName, setUserName] = useState("");

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
      setUserName(data.data.name);
    });

  const sold = 0;
  function changeManageProduct() {
    setmanageProducts((prev) => true);
    setmanageUsers((prev) => false);
    setregisterProducts((prev) => false);
  }
  function changeManageUsers() {
    setmanageProducts((prev) => false);
    setmanageUsers((prev) => true);
    setregisterProducts((prev) => false);
  }
  function changeRegisterProducts() {
    setmanageProducts((prev) => false);
    setmanageUsers((prev) => false);
    setregisterProducts((prev) => true);
  }

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

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/createProduct", {
      method: "POST",
      crossDomain: false,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        price,
        description,
        stock,
        sold,
        image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "createProduct");
        console.log(data.status, "status");
        if (data.status == "ok") {
          window.location.href = "./admin";
        }
      });
  };

  console.log(productList);

  return (
    <>
      {userName == "admin" ? (
        <div class="menu">
          <div class="menu-op">
            <table>
              <tr>
                <button onClick={changeManageProduct}>
                  <th>Manage Products</th>
                </button>
                <hr />
                <button onClick={changeManageUsers}>
                  <th>Manage Users</th>
                </button>
                <hr />
                <button onClick={changeRegisterProducts}>
                  <th>Register Products</th>
                </button>
              </tr>
            </table>
          </div>
          <div class="menu-details	">
            {manageProducts !== true ? (
              <> </>
            ) : (
              <div>
                <h1>Manage Products</h1>
                <hr />
                <div className="products">
                  {productList?.productList.data?.map((item) => (
                    <AdminProductItem item={item} />
                  ))}
                </div>
              </div>
            )}
            {manageUsers !== true ? (
              <> </>
            ) : (
              <div>
                <h1>Manage Users</h1>
                <hr />
                <table>
                  <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Remove</th>
                  </tr>
                  <AdminUserItem />
                </table>
              </div>
            )}
            {registerProducts !== true ? (
              <> </>
            ) : (
              <div>
                <h1>Register Products</h1>
                <hr />
                <table>
                  <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Remove</th>
                  </tr>
                  <AdminUserItem />
                  <AdminUserItem />
                </table>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Voce não é um administrador do site.</p>
      )}
    </>
  );
};

export default AdminProductManage;
