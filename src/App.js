import { React, useState } from "react";
import ImageSlider from "./components/ImageSlider";
import "./styles/slider.css";
import img from "./images/SliderImage.png";
import AllProduct from "./components/AllProduct";
import products from "./components/data.js";
import { Link } from "react-router-dom";
import NavBar from "./components/Navbar";
import Cart from "./components/Cart";
import props_cart from "./components/data2.js";

function App() {
  const [visionCard, setVisionCard] = useState(false);
  const [visionCheckout, setVisionCheckout] = useState(false);
  console.log(visionCard);
  // className={`none_opacity ${visionCard && "block_opacity"}`}
  return (
    <div>
      <NavBar visionCard={visionCard} setVisionCard={setVisionCard} />
      <Cart
        items={props_cart}
        visionCard={visionCard}
        setVisionCard={setVisionCard}
        visionCheckout={visionCheckout}
        setVisionCheckout={setVisionCheckout}
      />
    </div>
  );
}

export default App;
