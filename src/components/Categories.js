import React, { useState } from 'react'
import image from '../images/pexels-karolina-grabowska-4466208.png'
import Category from './Category'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import '../styles/categories.css'
const data = [
  {
    id: '1',
    name: 'All Categories',
    img: image
  },
  {
    id: '2',
    name: 'All Categories1',
    img: image
  },
  {
    id: '3',
    name: 'All Categories2',
    img: image
  },
  {
    id: '4',
    name: 'All Categories3',
    img: image
  },
  {
    id: '1',
    name: 'All Categories',
    img: image
  },
  {
    id: '2',
    name: 'All Categories1',
    img: image
  },
  {
    id: '3',
    name: 'All Categories2',
    img: image
  },
  {
    id: '4',
    name: 'All Categories3',
    img: image
  },
]

const Categories = () => {
  const [selected, setSelected] = useState(0)
  return (
    <div className='categories-field'>
      <div className='categories-title'>
        Categories
      </div>
      <div className='categories-row'>
        <ScrollMenu>
          {data.map((el, index) => {
            return <Category onClick={()=>setSelected(index)} name={el.name} key={el.id} img={el.img} selected={index === selected} first={index === 0} />
          })}
        </ScrollMenu>
      </div>
    </div>
  )
}

export default Categories