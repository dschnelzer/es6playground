var getTotal = function (price, tax =  price * 0.07 ) {
  console.log(price + tax);
  console.log(arguments.length);
};

getTotal(5.00);