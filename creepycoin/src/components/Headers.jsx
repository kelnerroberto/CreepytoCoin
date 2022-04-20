import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from 'react-router-dom';
import { HeaderStyle, WebsiteLogoNav } from "../styles/headerStyle";
import '../Header.css';

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
      <WebsiteLogoNav>
        <h3 className="WebSiteName-Header" onClick={() => navigate(`/`)}>creepytocoin.com</h3>
      </WebsiteLogoNav>
      <div>
        <input type='text' onChange={(event) => handleChange(event)} />
        <button type="button" onClick={() => searchByNameBtn()}>Pesquisar</button>
      </div>
    </HeaderStyle>
  )
}

export default Header;
