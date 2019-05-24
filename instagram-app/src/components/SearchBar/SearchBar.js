import React from 'react';
import './SearchBar.css'
import logo from '../../assets/logo.instagram.png';

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search">
        <img className="instagram-logo" src={logo} alt="instagram logo" />
        <input className="input" placeholder="search" />
        <div className="icon-container">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </div>
    </div>
  )
}

export default SearchBar