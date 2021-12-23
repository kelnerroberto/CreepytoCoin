import React, { useEffect, useState } from 'react';
import { FetchMainCurrencies } from '../API/FetchFunc';
import AppContext from './AppContext';
import {compareName, compareValue, compareVariation} from './helpers/SortFunctions';

function Provider({ children }) {
  const [currencies, setCurrencies] = useState([]);
  const [searchedCurrency, setSearchedCurrency] = useState([]);
  const [orderedTable, setOrderedTable] = useState([]);
  const [clickedOrderTable, setClickedOrderTable] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const contextValue = {
    currencies,
    setCurrencies,
    searchedCurrency,
    setSearchedCurrency,
    isLoaded,
    orderedTable,
    setOrderedTable,
    clickedOrderTable,
    setClickedOrderTable,
  };

  useEffect(() => {
    if (clickedOrderTable === 'currency') {
      const orderByCurr = currencies.map((eachCurr) => eachCurr).sort(compareName);
      setOrderedTable(orderByCurr);
    }
    if (clickedOrderTable === 'variationToday') {
      const orderByVariation = currencies
        .map((eachCurr) => eachCurr)
          .sort(compareVariation);
      setOrderedTable(orderByVariation);
    }
    if (clickedOrderTable === 'currentValue') {
      const orderByCurrentValue = currencies
        .map((eachCurr) => eachCurr)
          .sort(compareValue);
      setOrderedTable(orderByCurrentValue);
    }
  }, [clickedOrderTable]);

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