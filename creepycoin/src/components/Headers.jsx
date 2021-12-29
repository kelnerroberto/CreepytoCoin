import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchBarResult, setSearchBarResult] = useState('');
  const { currencies, setSearchedCurrency } = useContext(AppContext);
  let navigate = useNavigate();

  const handleChange = ({target}) => {
    setSearchBarResult(target.value);
  }

  const searchByNameBtn = () => {
    const searchedItem = currencies.filter((eachCurr) => eachCurr.name.toUpperCase() === searchBarResult.toUpperCase());
    console.log(searchedItem);
    setSearchedCurrency(searchedItem);
    navigate(`/asset/${searchedItem[0].name.toLowerCase()}`);
  }

  return (
    <header className="Header">
      <div>
        <h3>creepytocoin.com</h3>
      </div>
      <div>
        <input 
        type='text' 
        onChange={(event) => handleChange(event)} 
        placeholder="Search..."/>
        <button type="button" onClick={() => searchByNameBtn()}>Pesquisar</button>
      </div>
    </header>
  )
}

export default Header;
