import { React, useState } from "react";
import "./styles/slider.css";
import NavBar from "./components/Navbar";
import Cart from "./components/Cart";
import props_cart from "./components/data2.js";

function App() {
  const [visionCard, setVisionCard] = useState(false);
  const [visionCheckout, setVisionCheckout] = useState(false);
  return (
    <>
      <NavBar visionCard={visionCard} setVisionCard={setVisionCard} />
      <Cart
        items={props_cart}
        visionCard={visionCard}
        setVisionCard={setVisionCard}
        visionCheckout={visionCheckout}
        setVisionCheckout={setVisionCheckout}
      />
    </>
  );
}

export default App;
