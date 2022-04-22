import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { HeaderStyle, Logo, SearchContainer, SearchInput, SearchButton } from "../styles/headerStyle";

const Header = () => {
  const [searchBarResult, setSearchBarResult] = useState('');
  const { currencies, setSearchedCurrency } = useContext(AppContext);
  let navigate = useNavigate();

  const handleChange = ({target}) => {
    setSearchBarResult(target.value);
  }

  const searchByNameBtn = () => {
    const searchedItem = currencies
      .filter((eachCurr) => eachCurr.name.toUpperCase().includes(searchBarResult.toUpperCase()));

    setSearchedCurrency(searchedItem);

    navigate(`/asset/${searchedItem[0].name.toLowerCase()}`);
  }

  return (
    <HeaderStyle>
      <Logo onClick={() => navigate(`/`)}>Creepyto<span>Coin</span></Logo>
      <SearchContainer>
        <SearchInput 
        type='text' 
        onChange={(event) => handleChange(event)} 
        placeholder="Search cryptocoin"/>
        <SearchButton type="button" onClick={() => searchByNameBtn()}>
          <AiOutlineSearch />
        </SearchButton>
      </SearchContainer>
    </HeaderStyle>
  )
}

export default Header;
