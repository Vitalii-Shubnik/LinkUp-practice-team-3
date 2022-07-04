import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/allproduct.css";
import { changeNumberOfProductInCart } from "../app/service";
import { ReactComponent as CardIcon } from "../images/card.svg";
import { url } from "../constants/constants";

const Product = (props) => {
  const [counter, setCounter] = useState(0);
  const [Loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const user = localStorage.getItem('user')

  const navigate = useNavigate()
  useEffect(() => {
    const setInCart = async () => {
      setCounter(await changeNumberOfProductInCart(user, props.item.id, setLoading, 0))
      const res = await fetch(`${url}/photos/product/${props.item.id}`)
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImage(imageObjectURL)
    }
    setInCart()
  }, [])


  return (
    <div className="product-card" >
      <div className="product-main-info" onClick={() => navigate(`/product/${props.item.id}`)}>
        <div style={{ display: counter ? "flex" : "none" }} className="card">
          <CardIcon />
          In Card
        </div>
        {image && <img className="img_product" src={image} alt={props.item.name} />}
        <h1 className="product-title">{props.item.name}</h1>
        <h1 className="product-sold">{props.item.soldCount} Sold</h1>
      </div>
      <div className="product-price-info">
        <p className="product-price">{props.item.price}</p>
        <div className="product-btns">
          <button
            style={{ display: counter ? "block" : "none" }}
            className="product-minus"
            type="button"
            onClick={async () => { user !== 'undefined' && user && setCounter(await changeNumberOfProductInCart(user, props.item.id, setLoading, -1)) }}
          >
            -
          </button>
          <div
            style={{ display: counter ? "block" : "none" }}
            className="product-counter"
          >
            {counter}
          </div>
          <button className="product-plus" type="button"
            onClick={async () => { user !== 'undefined' && user && setCounter(await changeNumberOfProductInCart(user, props.item.id, setLoading, 1)) }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
