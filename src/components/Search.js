import React from 'react'
import '../styles/navbar.css'
import { FiSearch } from 'react-icons/fi'


const Search = ({setQuery}) => {
  const handleEnter = (e) => {
    if(e.key === 'Enter'){
      setQuery(`&name=${e.target.value}`)
    } 
  }
  return (
    <label htmlFor='search' className='search-div'>
      <FiSearch style={{color: "#A8ACB8"}} />
      <input
        className='search-input'
        placeholder='Search'
        type="text"
        name="search"
        id='search'
        onKeyDown={handleEnter}
      />
    </label>
  )
}

export default Search