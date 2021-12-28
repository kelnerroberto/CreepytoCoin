import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import MapTheCurrencies from './helpers/MapTheCurrencies';

const HomeMainContent = () => {
  const {
    currencies, 
    orderedTable, 
    setClickedOrderTable, 
    isLoaded,
    isOrderedClicked} = useContext(AppContext);

  return (
    isLoaded ?
    MapTheCurrencies(currencies, orderedTable, setClickedOrderTable, isOrderedClicked)
    :
    'Carregando...'
  )
}

export default HomeMainContent;
