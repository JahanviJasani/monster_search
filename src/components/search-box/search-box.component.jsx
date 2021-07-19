import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      placeholder = {placeholder}
      type = "search"
      className = "search"
      onChange = {handleChange}
    />
  )
}