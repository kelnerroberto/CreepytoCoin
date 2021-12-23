import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import MapTheCurrencies from './helpers/MapTheCurrencies';

const HomeMainContent = () => {
  const {currencies, orderedTable, setClickedOrderTable, isLoaded} = useContext(AppContext);
  
  console.log(orderedTable);

  return (
    isLoaded ?
    MapTheCurrencies(currencies, orderedTable, setClickedOrderTable)
    :
    'Carregando...'
  )
}

export default HomeMainContent;
