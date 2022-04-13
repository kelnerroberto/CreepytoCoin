import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from 'react-router-dom';
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

  const backToHomePage = () => {
    navigate(`/`);
  }

  return (
    <div className="Header">
      <div>
        <h3 className="WebSiteName-Header" onClick={() => backToHomePage()}>creepytocoin.com</h3>
      </div>
      <div>
        <input type='text' onChange={(event) => handleChange(event)} />
        <button type="button" onClick={() => searchByNameBtn()}>Pesquisar</button>
      </div>
    </div>
  )
}

export default Header;
