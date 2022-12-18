import React, { useState, useEffect } from "react";
import Header from "./component/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./component/Home/Home";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import Products from "./component/Products/Products";
import RegLogForms from "./component/RegLogForms/RegLogForms";
import ShopItemCart from "./component/ShopItemCart/ShopItemCart";
import cartImage from "./images/cart.png";
import AdminProductManage from "./component/AdminProductManage/AdminProductManage";

import data from "./data";

import "./App.css";
import Search from "./component/Search/Search";

const App = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  let { searchParam } = useParams();
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onDelete = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };

  console.log(cartItems);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p>
                  {typeof backendData.users === "undefined" ? (
                    <p>loading</p>
                  ) : (
                    backendData.users.map((user, i) => <p key={i}>{user}</p>)
                  )}
                </p>
                <Header />
                <Home products={products.slice(0, 5)} onAdd={onAdd} />
              </>
            }
          />
          <Route
            path="/productDetails/*"
            element={
              <>
                <Header />
                <ProductDetails products={products} onAdd={onAdd} />
              </>
            }
          />
          <Route
            path="/shoppingPage"
            element={
              <>
                <Header />
                <div className="productsPage products">
                  {/* <Products products={products.slice(0, 5)} onAdd={onAdd} /> */}
                  <Products products={products} onAdd={onAdd} />
                </div>
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Header />
                <div className="register">
                  <RegLogForms />
                </div>
              </>
            }
          />
          <Route
            path="/shoppingCart"
            element={
              <>
                <Header />
                <div className="cartContainer">
                  {cartItems.map((item) => (
                    <ShopItemCart
                      key={item.id}
                      item={item}
                      onAdd={onAdd}
                      onRemove={onRemove}
                      onDelete={onDelete}
                    />
                  ))}
                  <button
                    className="cartButton"
                    onClick={() => alert("Pedido Finalizado!")}
                  >
                    <img src={cartImage} alt="" />
                    <p>Finalizar Pedido</p>
                  </button>
                </div>
              </>
            }
          />
          <Route path="/search">
            <Route
              path=":searchParam"
              element={
                <>
                  <Header />
                  <div className="productsPage products">
                    <Search products={products} onAdd={onAdd} />
                  </div>
                </>
              }
            />
          </Route>
          <Route
            path="/admin"
            element={
              <>
                <Header />
                <div className="admin">
                  <AdminProductManage />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
