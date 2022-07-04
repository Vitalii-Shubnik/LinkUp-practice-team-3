import React, { useEffect, useState } from 'react'
import { url } from '../constants/constants'
const Category = ({onClick, name, id, selected, first}) => {

  const [image, setImage] = useState(null)
  useEffect(() => {
    const getImage = async() => {
      const res = await fetch(`${url}/photos/category/${id}`)
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImage(imageObjectURL)
    }
    getImage()
  }, [])
  

  return (
    <div onClick={onClick} className={`category ${first && 'category-first'}`}>
      <div className='category-image-container'>
        {image && <img src={image} alt='category' className='category-img'/>}
      </div>
      <span className={`category-name ${selected && 'selected'}`}>{name}</span>
    </div>
  )
}

export default Category