import React, { useState } from "react";
import "../styles/cart.css";
import { MdOutlineClose } from "react-icons/md";
import Element from "./CartElement";
import { ReactComponent as CheckoutDone } from "../images/checkout_done_img.svg";

const Cart = ({
  items,
  visionCard,
  setVisionCard,
  visionCheckout,
  setVisionCheckout,
}) => {
  const [totalPrice, setTotalPrice] = useState(
    items.reduce(
      (total, currentValue) =>
        (total = total + currentValue.price * currentValue.count),
      0
    )
  );
  const getDisplayNumber = (num) =>
    (Math.round(Number(num) * 100) / 100).toFixed(2);
  console.log(items);
  return (
    <div className="cart_conteiner">
      <div
        className={`cart_none_opacity ${
          (visionCard || visionCheckout) && "cart_opacity"
        }`}
      ></div>
      <div
        className={visionCard ? "cart active" : "cart"}
        onClick={() => setVisionCard(false)}
      >
        <div className="cart_content" onClick={(e) => e.stopPropagation()}>
          <div className="cart_header">My Cart</div>
          <div
            className="cross"
            onClick={() => setVisionCard(false)}
            style={{ textDecoration: "none" }}
          >
            <MdOutlineClose height={12} width={12} color="#313131" />
          </div>
          {items.map((item) => {
            return <Element key={item.id} item={item} />;
          })}
          <div className="cart_footer">
            <div className="checkout">
              <div className="total_price">${getDisplayNumber(totalPrice)}</div>
              <div className="total_price_title">Total Price</div>
            </div>
            <div
              className="btn_checkout"
              onClick={() => {
                setVisionCheckout(true);
                setVisionCard(false);
              }}
            >
              Checkout
            </div>
          </div>
        </div>
      </div>
      <div
        className={visionCheckout ? "_checkout _checkout_active" : "_checkout"}
        onClick={() => {
          setVisionCheckout(false);
          setVisionCard(false);
        }}
      >
        <div className="_checkout_content" onClick={(e) => e.stopPropagation()}>
          <div
            className="cross"
            onClick={() => {
              setVisionCheckout(false);
              setVisionCard(false);
            }}
            style={{ textDecoration: "none" }}
          >
            <MdOutlineClose height={12} width={12} color="#313131" />
          </div>
          <div className="checkout_done">
            <CheckoutDone />
          </div>
          <div className="congratulation">Congratulation!</div>
          <div className="checkout_discription">
            Your order has successfully placed and started processing.
          </div>
          <div className="total_price_in_checkout">
            <div className="total_price_in_checkout_title">TOTAL</div>
            <div className="total_price_in_checkout_amount">
              ${getDisplayNumber(totalPrice)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
