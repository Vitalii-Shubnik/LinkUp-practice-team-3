import { React, useState } from "react";
import ImageSlider from "./components/ImageSlider";
import "./styles/slider.css";
import img from "./images/SliderImage.png";
import AllProduct from "./components/AllProduct";
import products from "./components/data.js";
import { Link } from "react-router-dom";
import NavBar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [visionCard, setVisionCard] = useState(false);
  return (
    <div>
      <NavBar visionCard={visionCard} setVisionCard={setVisionCard} />
      <Cart visionCard={visionCard} setVisionCard={setVisionCard} />
    </div>
  );
}

export default App;
