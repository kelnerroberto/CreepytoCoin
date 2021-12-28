import React from "react";

const MapTheCurrencies = (currencies, orderedTable, setClickedOrderTable, isOrderedClicked) => {
  const replaceDot = (price) => {
    const roundedNumb = `${Math.round(price * 100000) / 100000}`.replace(".", ",");
    return roundedNumb;
  }

  const handleOrderClicked = (value) => {
    if (value === 'currency') {
      if (isOrderedClicked === 'orderedByCurrency') {
        setClickedOrderTable('orderReverseByCurrency')
      }
      else {
        setClickedOrderTable(value)
      }
    }
    if (value === 'variationToday') {
      if (isOrderedClicked === 'orderedByVariation') {
        setClickedOrderTable('orderReverseByVariation');
      } 
      else {
        setClickedOrderTable(value)
      }
    }
    if (value === 'currentValue') {
      if (isOrderedClicked === 'orderedByCurrentValue') {
        setClickedOrderTable('orderReverseByCurrentValue');
      }
      else {
        setClickedOrderTable(value);
      }
    }
  }

  return (
  <div className="table-wrapper">
  <table className="fl-table">
    <thead>
      <tr>
        <th></th>
        <th><button
        className="table-btns" 
        type="button" 
        onClick={() => handleOrderClicked('currency')}>
          Currency
        </button></th>
        <th>
        <button
        className="table-btns" 
        type="button" 
        onClick={() => handleOrderClicked('variationToday')}>
          Variation today
        </button></th>
        <th><button
        className="table-btns" 
        type="button" 
        onClick={() => handleOrderClicked('currentValue')}>
          Current Value
        </button></th>
      </tr>
    </thead>
    <tbody>
        {orderedTable.length > 0 ?
        orderedTable.map(({id, symbol, name, priceUsd, changePercent24Hr}) => (
          <tr key={id}>
            <td><strong>{symbol}</strong></td>
            <td>{name}</td>
            <td className={changePercent24Hr > 0 ? 'positive-24' : 'negative-24'}>
            {Math.round(changePercent24Hr * 100) / 100}
            </td>
            <td>{`US$ ${replaceDot(priceUsd)}`}</td> 
          </tr>
        ))
        :
        currencies.map(({id, symbol, name, priceUsd, changePercent24Hr}) => (
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
  </div>
  )
}

export default MapTheCurrencies;
