import React from 'react';
import './SearchBar.css'
import logo from '../../assets/logo.instagram.png';
import styled from 'styled-components';

const SearchContainer = styled.div`
  height: 5%;
  width: 100%;
  margin: 0 auto;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
`;

const InstagramLogo = styled.img`
  max-width: auto;
  height: 50px;
`;

const IconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const SearchBar = props => {
  return (
    <SearchContainer>
      <Search>
        <InstagramLogo src={logo} alt="instagram logo" />
        <form onSubmit={props.filterUsername}>
          <input
            value={props.search}
            name={'search'}
            onChange={props.handleChange}
            className="input"
            placeholder="search"
          />
        </form>
        <IconContainer>
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </IconContainer>
      </Search>
    </SearchContainer>
  )
}

export default SearchBar