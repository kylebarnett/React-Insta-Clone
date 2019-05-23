import React from 'react';
import './SearchBar.css'
import logo from '../../assets/logo.instagram.png';

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search">
        <img className="instagram-logo" src={logo} alt="instagram logo" />
      </div>
      <div className="input">
        <input placeholder="search" />
      </div>
    </div>
  )
}

export default SearchBar