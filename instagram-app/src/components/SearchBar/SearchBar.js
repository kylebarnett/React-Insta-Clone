import React from 'react';
import './SearchBar.css'
import logo from '../../assets/logo.instagram.png';

const SearchBar = props => {
  return (
    <div className="search-container">
      <div className="search">
        <img className="instagram-logo" src={logo} alt="instagram logo" />
        <form onSubmit={(e) => props.filterUsername(e, this.props.index)}>
          <input
            value={props.search}
            name={'search'}
            onChange={props.handleChange}
            className="input"
            placeholder="search"
          />
        </form>
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