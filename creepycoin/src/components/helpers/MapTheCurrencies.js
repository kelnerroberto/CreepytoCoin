import React from "react";

const MapTheCurrencies = (currencies) => {
  const replaceDot = (price) => {
    const roundedNumb = `${Math.round(price * 100000) / 100000}`.replace(".", ",");
    return roundedNumb;
  }

  return (
  <table className="main-table">
    <thead>
      <tr>
        <th></th>
        <th>Currency</th>
        <th>Variation today</th>
        <th>Current Value</th>
      </tr>
    </thead>
    <tbody>
        {currencies.map(({id, symbol, name, priceUsd, changePercent24Hr}) => (
          <tr key={id}>
            <td><strong>{symbol}</strong></td>
            <td>{name}</td>
            <td className={changePercent24Hr > 0 ? 'positive-24' : 'negative-24'}>
            {Math.round(changePercent24Hr * 100) / 100}
            </td>
            <td>{`US$ ${replaceDot(priceUsd)}`}</td> 
          </tr>
        ))}
    </tbody>
  </table>
  )
}

export default MapTheCurrencies;
