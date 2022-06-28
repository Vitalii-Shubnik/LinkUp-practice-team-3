import React, { useEffect, useState } from 'react'
import image from '../images/pexels-karolina-grabowska-4466208.png'
import Category from './Category'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import '../styles/categories.css'
import { url } from '../constants/constants'

const Categories = () => {
  const [selected, setSelected] = useState(0)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const getCategories = async () => {
      const categories = await fetch(`${url}/products/categories`).then(data => data.json())
      setCategories(categories)
      console.log(categories)
    }
    getCategories()
  }, [])
  return (
    <div className='categories-field'>
      <div className='categories-title'>
        Categories
      </div>
      <ScrollMenu>
        {categories.length && categories.sort(function (a, b) {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
        }).map((el, index) => {
          return <Category onClick={() => setSelected(index)} name={el.name} key={el.id} id={el.id} selected={index === selected} first={index === 0} />
        })}
      </ScrollMenu>
    </div>
  )
}

export default Categories