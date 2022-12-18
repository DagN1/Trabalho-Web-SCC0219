import React, { useState } from "react";
import AdminProductItem from "../AdminProductItem/AdminProductItem";
import "./AdminProductManage.css";

const AdminProductManage = () => {
  const [manageProducts, setmanageProducts] = useState(true);
  const [manageUsers, setmanageUsers] = useState(false);
  const [registerProducts, setregisterProducts] = useState(false);
  function changeManageProduct() {
    setmanageProducts((prev) => 1);
  }
  function changeManageUsers() {
    setmanageUsers((prev) => 1);
  }
  function changeRegisterProducts() {
    setregisterProducts((prev) => 1);
  }

  return (
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
          <table>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Remove</th>
            </tr>
            <AdminProductItem />
            <AdminProductItem />
            <AdminProductItem />
            <AdminProductItem />
            <AdminProductItem />
          </table>
        )}
        {manageUsers !== true ? (
          <> </>
        ) : (
          <table>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Remove</th>
            </tr>
            <AdminProductItem />
          </table>
        )}
        {registerProducts !== true ? (
          <> </>
        ) : (
          <table>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Remove</th>
            </tr>
            <AdminProductItem />
            <AdminProductItem />
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminProductManage;
