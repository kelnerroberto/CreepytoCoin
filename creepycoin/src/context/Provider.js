import React, { useEffect, useState } from 'react';
import FetchMainCurrencies from '../API/FetchFunc';
import AppContext from './AppContext';

function Provider({ children }) {
  const [currencies, setCurrencies] = useState([]);
  const [searchedCurrency, setSearchedCurrency] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const contextValue = {
    currencies,
    setCurrencies,
    searchedCurrency,
    setSearchedCurrency,
    isLoaded,
  };

  useEffect(() => {
    const fetchData = async () => {
      setCurrencies(await FetchMainCurrencies());
    };
    fetchData();
    setIsLoaded(true);
  }, []);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;