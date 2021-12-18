export async function FetchMainCurrencies(){
  const response = await fetch('https://api.coincap.io/v2/assets');
  const json = await response.json();
  const results = await json.data;
  return results;
}

export default FetchMainCurrencies;
