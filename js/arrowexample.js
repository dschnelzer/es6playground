var getPrice = () => 3.47;
console.log('price type is', typeof getPrice);
console.log('price is', getPrice());

var getPrice2 = function() {
  return 3.47;
}

let calcPrice = (count, tax) => count * 4.00 * (1 + tax);
console.log('calcPrice', calcPrice(2, 0.07));