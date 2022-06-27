import React from 'react'

const Category = ({onClick, name, img, selected, first}) => {
  return (
    <div onClick={onClick} className={`category ${first && 'category-first'}`}>
      <div className='category-image-container'>
        <img src={img} alt='category' className='category-img'/>
      </div>
      <span className={`category-name ${selected && 'selected'}`}>{name}</span>
    </div>
  )
}

export default Category