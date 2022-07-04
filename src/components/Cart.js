import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import { MdOutlineClose } from "react-icons/md";
import Element from "./CartElement";
import { ReactComponent as CheckoutDone } from "../images/checkout_done_img.svg";
import { url } from "../constants/constants";

const Cart = ({
  visionCard,
  setVisionCard,
  visionCheckout,
  setVisionCheckout,
}) => {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const user = localStorage.getItem('user')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getProductList = async () => {
      setLoading(true);
      const cartData = await fetch(`${url}/user/cart`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${JSON.parse(user)}`
        },
      }).then(data => data.json())
      setCart(cartData)
    }
    getProductList();

  }, []);
  useEffect(() => {
    setTotalPrice(cart.reduce((total, currentValue) => (total = total + currentValue.product.price.substring(1) * currentValue.itemCount), 0))
  }, [cart])
  const getDisplayNumber = (num) =>
    (Math.round(Number(num) * 100) / 100).toFixed(2);
  return (
    <div className="cart_conteiner">
      <div
        className={`${(visionCard || visionCheckout) && "cart_opacity"}`}
      ></div>
      <div
        className={visionCard ? "cart active" : "cart"}
        onClick={() => setVisionCard(false)}
      >
        <div className="cart_content" onClick={(e) => e.stopPropagation()}>
          <div className="cart_header">My Cart</div>
          <div
            className="exit"
            onClick={() => setVisionCard(false)}
            style={{ textDecoration: "none" }}
          >
            <MdOutlineClose height={12} width={12} color="#313131" />
          </div>
          <div className="cart-items-collection">
            {cart && cart.map((item) => {
              return !!item.itemCount && <Element price={totalPrice} setPrice={setTotalPrice} key={item.id} item={item} />;
            })}
          </div>
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
