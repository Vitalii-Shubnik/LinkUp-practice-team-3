import React, { useState } from 'react'
import '../styles/slider.css'

const ImageSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const getPrev = () => {
    const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex) 
  }
  const getNext = () => {
    const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex) 
  }
  return (
    <div className='slider'>
      <div className='slide' style={{ backgroundImage: `url(${data[currentIndex].url})` }}>
        <div className='description'>
          {data[currentIndex].description}
        </div>
        <div className='slider-title'>
          {data[currentIndex].title}
        </div>
      </div>
      <div className='indicators'>
        {data.map((item, index) => {
          return (
            <div key={index} className={`${index === currentIndex && 'current'} dot`} disabled onClick={()=>{setCurrentIndex(index)}}/>
          )
        })}
      </div>
      <button className='switch left-switch' onClick={getPrev}></button>
      <button className='switch right-switch' onClick={getNext}></button>
    </div>
  )
}

export default ImageSlider