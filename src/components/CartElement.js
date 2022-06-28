import React, { useEffect, useState } from "react";
import { changeNumberOfProductInCart } from "../app/service";
import { url } from "../constants/constants";

const Element = (props) => {
  const [counter, setCounter] = useState(props.item.itemCount)
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null);

  const user = localStorage.getItem('user')
  useEffect(() => {
    const setInCart = async () => {
      const res = await fetch(`${url}/photos/product/${props.item.product.id}`)
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImage(imageObjectURL)
    }
    setInCart()
  }, [])
  return (
    <div className="cart_elem">
      <div className="img_cart_wrapper">
        <img
          className="img_cart"
          src={image}
          alt={props.item.product.name}
        />
      </div>

      <div className="info_cart_wrapper">
        <div className="elem_title">{props.item.product.name}</div>
        <div className="elem_price">{props.item.product.price}</div>
      </div>

      <div className="elem_btns">
        <button
          style={{ display: counter ? "block" : "none" }}
          className="elem_minus"
          type="button"
          onClick={async () => {
            user !== 'undefined' && user && setCounter(await changeNumberOfProductInCart(user, props.item.product.id, setLoading, -1));
            props.setPrice(props.price - props.item.product.price.substring(1))
          }}
        >
          -
        </button>
        <div
          style={{ display: counter ? "block" : "none" }}
          className="elem_counter"
        >
          {counter}
        </div>
        <button className="elem_plus" type="button"
          onClick={async () => {
            user !== 'undefined' && user && setCounter(await changeNumberOfProductInCart(user, props.item.product.id, setLoading, 1))
            props.setPrice(props.price + parseFloat(props.item.product.price.substring(1)))

          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Element;
