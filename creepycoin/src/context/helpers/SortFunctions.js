export function compareName( a, b ) {
  if ( a.name < b.name) {
    return -1;
  }
  if ( a.name > b.name){
    return 1;
  }
  return 0;
}

export function compareVariation( a, b ) {
  if (Number(a.changePercent24Hr) < Number(b.changePercent24Hr)) {
    return -1;
  }
  if (Number(a.changePercent24Hr) > Number(b.changePercent24Hr)) {
    return 1;
  }
  return 0;
}

export function compareValue( a, b ) {
  if (Number(a.priceUsd) < Number(b.priceUsd)) {
    return -1;
  }
  if (Number(a.priceUsd) > Number(b.priceUsd)) {
    return 1;
  }
  return 0;
}
