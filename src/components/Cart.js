import React, { useState } from "react";
import "../styles/cart.css";
import { MdOutlineClose } from "react-icons/md";

const Cart = ({ visionCard, setVisionCard }) => {
  const [totalPrice] = useState(3214);
  const getDisplayNumber = (num) =>
    (Math.round(Number(num) * 100) / 100).toFixed(2);

  return (
    <div className="cart_conteiner">
      <div
        className={`cart_none_opacity ${visionCard && "cart_opacity"}`}
      ></div>
      <div
        className={visionCard ? "cart active" : "cart"}
        onClick={() => setVisionCard(false)}
      >
        {/* <div className="blur"></div> */}
        <div className="cart_content" onClick={(e) => e.stopPropagation()}>
          {/* <div className="cart_content" onClick={(r) => r.stopPropagination()}> */}
          <div className="cart_header">
            <div
              className="cross"
              onClick={() => setVisionCard(false)}
              style={{ textDecoration: "none" }}
            >
              <MdOutlineClose height={12} width={12} color="#313131" />
            </div>
            My Cart
          </div>
          <div className="cart_footer">
            <div className="checkout">
              <div className="total_price">${getDisplayNumber(totalPrice)}</div>
              <div className="total_price_title">Total Price</div>
            </div>
            <div className="btn_checkout">Checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
