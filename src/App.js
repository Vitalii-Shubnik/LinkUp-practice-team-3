import { React } from 'react'
import ImageSlider from './components/ImageSlider'
import './styles/slider.css'
import img from './images/SliderImage.png'
import AllProduct from "./components/AllProduct";
import products from "./components/data.js";
import {Link} from 'react-router-dom'
import NavBar from './components/Navbar'
import HomePage from './pages/HomePage';
import image from './images/SliderImage.png'
import Categories from './components/Categories';



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
  return (
    <div>
      <NavBar />
      <HomePage/>      

    </div>
  );
}

export default App;
