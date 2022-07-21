import React from 'react'
import "./SearchBar.scss"

const SearchBar = ({searchTerm, label, handleInputForSearch}) => {

  return (
    <div className='search-bar'>
        <label className='search-bar__label' htmlFor="">{label}</label>
        <input className='search-bar__input' value={searchTerm} onInput={handleInputForSearch} type="text" />
    </div>
  )
}

export default SearchBar