import React, { useEffect, useState } from 'react';
import { FetchMainCurrencies } from '../API/FetchFunc';
import AppContext from './AppContext';
import {compareName, 
  compareValue, 
  compareVariation,
  compareReverseName,
  compareReverseVariation,
  compareReverseValue,
  } from './helpers/SortFunctions';

function Provider({ children }) {
  const [currencies, setCurrencies] = useState([]);
  const [searchedCurrency, setSearchedCurrency] = useState([]);
  const [orderedTable, setOrderedTable] = useState([]);
  const [clickedOrderTable, setClickedOrderTable] = useState('');
  const [isOrderedClicked, setIsOrederedClicked] = useState('');
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
    isOrderedClicked,
    setIsOrederedClicked,
  };

  useEffect(() => {
    if (clickedOrderTable === 'currency') {
      const orderByCurr = currencies.map((eachCurr) => eachCurr).sort(compareName);
      setOrderedTable(orderByCurr);
      setIsOrederedClicked('orderedByCurrency');
    }
    if (clickedOrderTable === 'orderReverseByCurrency') {
      const orderReverseByCurr = currencies.map((eachCurr) => eachCurr).sort(compareReverseName);
      setOrderedTable(orderReverseByCurr);
      setIsOrederedClicked('');
    }
    if (clickedOrderTable === 'variationToday') {
      const orderByVariation = currencies
        .map((eachCurr) => eachCurr)
          .sort(compareVariation);
      setOrderedTable(orderByVariation);
      setIsOrederedClicked('orderedByVariation');
    }
    if (clickedOrderTable === 'orderReverseByVariation') {
      const orderReverseByVariation = currencies
        .map((eachCurr) => eachCurr)
          .sort(compareReverseVariation);
      setOrderedTable(orderReverseByVariation);
      setIsOrederedClicked('');
    }
    if (clickedOrderTable === 'currentValue') {
      const orderByCurrentValue = currencies
        .map((eachCurr) => eachCurr)
          .sort(compareValue);
      setOrderedTable(orderByCurrentValue);
      setIsOrederedClicked('orderedByCurrentValue');
    }
    if (clickedOrderTable === 'orderReverseByCurrentValue') {
      const orderReverseByCurrentValue = currencies
        .map((eachCurr) => eachCurr)
          .sort(compareReverseValue);
      setOrderedTable(orderReverseByCurrentValue);
      setIsOrederedClicked('');
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