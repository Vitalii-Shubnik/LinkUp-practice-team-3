import { React, useEffect, useState } from "react";
import "./styles/slider.css";
import NavBar from "./components/Navbar";
import Cart from "./components/Cart";
import props_cart from "./components/data2.js";
import image from './images/SliderImage.png'

import Categories from './components/Categories';
import HomePage from './pages/HomePage'

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
  const [user, setUser] = useState(null)
  window.addEventListener('storage', () => {
    setUser(localStorage.getItem('user'))
  })
  useEffect(() => {
    setUser(localStorage.getItem('user'))
  }, [])
  
  const [visionCard, setVisionCard] = useState(false);
  const [visionCheckout, setVisionCheckout] = useState(false);
  return (
    <>
      <NavBar visionCard={visionCard} setVisionCard={setVisionCard} />
      <Cart
        visionCard={visionCard}
        setVisionCard={setVisionCard}
        visionCheckout={visionCheckout}
        setVisionCheckout={setVisionCheckout}
      />
      <HomePage/>
    </>
  );
}

export default App;
