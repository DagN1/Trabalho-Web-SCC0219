import React, {useState} from "react";
import "./AdminProductItem.css";



const AdminProductItem = () => {
  const [show, setShow] = useState(true);
  function removeElement(){
    setShow((prev) => !prev);
  }
  return (<>
  {show !== true ? (<> </>) :
    (<tr>
    <td className="item-id">AAAAAA</td>
    <td className="email">Pamonha@gmail.com</td>
    <button onClick={removeElement} className="remove-item">X</button>
    </tr>)
}
    </>
  );
};

export default AdminProductItem;
