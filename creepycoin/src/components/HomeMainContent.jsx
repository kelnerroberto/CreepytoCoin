import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import MapTheCurrencies from './helpers/MapTheCurrencies';

const HomeMainContent = () => {
  const {currencies, isLoaded} = useContext(AppContext);

  return (
    isLoaded ?
    MapTheCurrencies(currencies)
    :
    'Carregando...'
  )
}

export default HomeMainContent;
