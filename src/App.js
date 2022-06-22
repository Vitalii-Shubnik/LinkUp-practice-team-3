import { React } from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from './components/ImageSlider'
import './styles/slider.css'
import img from './images/SliderImage.png'
import AllProduct from "./components/AllProduct";
import products from "./components/data.js";
import {Link} from 'react-router-dom'
import NavBar from './components/Navbar'

function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
