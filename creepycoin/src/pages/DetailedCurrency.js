import React, { useContext } from "react";
import Header from "../components/Headers";
import AppContext from "../context/AppContext";

const DetailedCurrency = () => {
  const {searchedCurrency} = useContext(AppContext);
  console.log(searchedCurrency);
  const actualCurr = searchedCurrency[0];

  return (
    <>
    <Header />
    <h1>{actualCurr.symbol}</h1>
    <h2>{actualCurr.name}</h2>
    <p className={actualCurr.changePercent24Hr > 0 ? 'positive-24' 
    : 
    'negative-24'}>
      {Math.round(actualCurr.changePercent24Hr * 100) / 100}
    </p>
    <p>U$ {Math.round(actualCurr.priceUsd * 100000) / 100000}</p>
    </>
  )
}

export default DetailedCurrency;