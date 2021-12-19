export async function FetchMainCurrencies(){
  const response = await fetch('https://api.coincap.io/v2/assets');
  const json = await response.json();
  const results = await json.data;
  return results;
}

export async function FetchExchangeToBRL() {
  const response = await fetch('https://cat-fact.herokuapp.com/facts');
  const json = await response.json();
  console.log(json);
  //return results;
}
