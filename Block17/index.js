const drinks = require('./coffee_data');

//  Print an array of all the drinks on the menu.
console.log('---------Print an array of all the drinks on the menu.------');
console.table(drinks);

// . Print an array of drinks that cost 5 and under
console.log('---------Print an array of drinks that cost 5 and under.------');
const newDrinks = drinks.filter((drink) => drink.price <= 5);
console.table(newDrinks);

//  Print an array of drinks that are priced at an even number.
console.log('Print an array of drinks that are priced at an even number');
const evenPriceDrinks = drinks.filter((drink) => drink.price % 2 === 0);
console.table(evenPriceDrinks);

// . Print the total if you were to order one of every drink.
console.log('Print the total if you were to order one of every drink.');
const total = drinks.reduce((accumulator, drink) => {
  return drink.price + accumulator;
}, 0);
console.log('total price ' + total);

// Print an array with all the drinks that are seasonal.
console.log('Print an array with all the drinks that are seasonal.');
const seasonal = drinks.filter((drink) => drink.seasonal);
console.table(seasonal);

// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
console.log(
  "Print all the seasonal drinks with the words 'with imported beans' after the item name. For example: 'affogato with imported beans'"
);
seasonal.map((seasonal) => (seasonal.name += ' with imported beans'));
console.table(seasonal);
