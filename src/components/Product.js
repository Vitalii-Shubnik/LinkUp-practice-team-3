import React, { useState } from "react";
import "../styles/allproduct.css";
// import { BsCart2 } from "react-icons/bs";
import { ReactComponent as CardIcon } from "../images/card.svg";
const Product = (props) => {
  let [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter !== 0) setCounter((count) => count - 1);
  };

  return (
    <div className="product-card">
      <div className="product-main-info">
        <div style={{ display: counter ? "flex" : "none" }} className="card">
          <CardIcon />
          In Card
        </div>
        <img src={props.item.image} alt={props.item.title} />
        <h1 className="product-title">{props.item.title}</h1>
        <h1 className="product-sold">{props.item.sold} Sold</h1>
      </div>
      <div className="product-price-info">
        <p className="product-price">${props.item.price}</p>
        <div className="product-btns">
          <button
            style={{ display: counter ? "block" : "none" }}
            className="product-minus"
            type="button"
            onClick={decrease}
          >
            -
          </button>
          <div
            style={{ display: counter ? "block" : "none" }}
            className="product-counter"
          >
            {counter}
          </div>
          <button className="product-plus" type="button" onClick={increase}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
