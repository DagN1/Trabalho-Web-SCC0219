import React, { useState } from "react";
import "./ShopItemCart.css";
import product from "../../images/unsplash_uhzMXsQ7hBA.png";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import cross from "../../images/cross.png";

const ShopItemCart = (props) => {
  const { item, onAdd, onRemove, onDelete } = props;
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(1);

  function importAll(r) {
		return r.keys().map(r);
	  }
  const images = importAll(
    require.context("../../images/productsImages/", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="cart-item">
      <img src={images[item.img]} alt="generic jeans" />
      <p>{item.title}</p>
      <button
        onClick={() => onAdd(item)}
        className="pm-button"
        src={plus}
        alt="+"
      >
        +
      </button>
      <p className="quantity">{item.qty}</p>
      <button
        onClick={() => onRemove(item)}
        className="pm-button"
        src={minus}
        alt="-"
      >
        -
      </button>
      <p>R${(item.qty * item.price).toFixed(2)}</p>
      <button
        onClick={() => onDelete(item)}
        className="pm-button"
        src={cross}
        alt="X"
      >
        X
      </button>
    </div>
  );
};

export default ShopItemCart;

/*
{cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
*/
