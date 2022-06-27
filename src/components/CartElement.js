import React, { useState } from "react";

const Element = (props) => {
  let [counter, setCounter] = useState(props.item.count);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter !== 0) setCounter((count) => count - 1);
  };
  console.log(props.item);
  return (
    <div className="cart_elem">
      <div className="img_cart_wrapper">
        <img
          className="img_cart"
          src={props.item.image}
          alt={props.item.title}
        />
      </div>

      <div className="info_cart_wrapper">
        <div className="elem_title">{props.item.title}</div>
        <div className="elem_price">${props.item.price}</div>
      </div>

      <div className="elem_btns">
        <button
          style={{ display: counter ? "block" : "none" }}
          className="elem_minus"
          type="button"
          onClick={decrease}
        >
          -
        </button>
        <div
          style={{ display: counter ? "block" : "none" }}
          className="elem_counter"
        >
          {counter}
        </div>
        <button className="elem_plus" type="button" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
};

export default Element;
