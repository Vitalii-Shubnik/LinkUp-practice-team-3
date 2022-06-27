import { React, useState } from "react";
import "./styles/slider.css";
import NavBar from "./components/Navbar";
import Cart from "./components/Cart";
import props_cart from "./components/data2.js";
import image from './images/SliderImage.png'

const imageSliderData = [
  {
    description: 'Test1',
    title: 'title1',
    url: image
  },
  {
    description: 'Test2',
    title: 'title2',
    url: image
  },
  {
    description: 'Test3',
    title: 'title3',
    url: image
  },
  {
    description: 'Test4',
    title: 'title4',
    url: image
  }
]
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
