import React from 'react'
import AllProduct from '../components/AllProduct'
import ImageSlider from '../components/ImageSlider'
import Categories from '../components/Categories'
import image from '../images/SliderImage.png'
import data from '../components/data'
import '../styles/homepage.css'
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

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className='homepage-image-slider'>
        <ImageSlider data={imageSliderData} />
      </div>
      <div className='homepage-categories'>
        <Categories />
      </div>
      <div className='homepage-all-products'>
        <AllProduct items={data}/> 
      </div>
    </div>
  )
}

export default HomePage