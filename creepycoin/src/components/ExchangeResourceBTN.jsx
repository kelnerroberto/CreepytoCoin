import React from 'react';
import { FetchExchangeToBRL } from '../API/FetchFunc';

const ExchangeResourceBTN = () => {
  return (
    <button 
    type="button"
    onClick={() => FetchExchangeToBRL()}>
      Oi
    </button>
  )
}

export default ExchangeResourceBTN;
