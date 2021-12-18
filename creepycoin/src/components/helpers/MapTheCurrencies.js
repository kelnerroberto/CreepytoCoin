import React from "react";

const MapTheCurrencies = (currencies) => {
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
            <td>{symbol}</td>
            <td>{name}</td>
            <td>{changePercent24Hr}</td>
            <td>{priceUsd}</td> 
          </tr>
        ))}
    </tbody>
  </table>
  )
}

export default MapTheCurrencies;
