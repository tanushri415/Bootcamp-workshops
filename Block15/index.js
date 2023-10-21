// Froyo Survey Workshop

const customer = {
  firstName: 'jake',
  lastName: 'smith',
  email: 'jaeksmih!AudioListener.customer',
  phone: 'undefined',
  zipCode: '631',
  favoriteFlavors: 32,
  cupSize: 'medium',
  favouriteStore: 'Target',
  firstVisit: false,
};
console.log(customer);

// Update property (key and values) using bracket notation

customer['email'] = 'jak3Smith1992@email.com';
customer['phone'] = 3195551234;
customer['zipCode'] = '63132';
customer['favoriteFlavors'] = 'coffee, straberry, matcha';

console.log(customer);

// delete property from object using delete method

delete customer.zipCode;
delete customer.favouriteStore;
console.log(customer);

// add properties(keys and values pairs in the object) using dot notation.

customer.toppings = 'choclate sprinkles, wafer straws, gummy bears';
customer.futureFlavors = 'mango';
customer.todaysPurchaseCost = '$5.32';

console.log(customer);

// putting all the keys in an array and then print it

let keysArray = Object.keys(customer);

console.log(keysArray);

const addTwoNums = function (param1, param2) {
  return;
};

// guided practice workshop 16

const budget = 50;
const price1 = 20;
const price2 = 25;

function sumOfGifts(gift1, gift2) {
  return gift1 + gift2;
}

console.log(sumOfGifts);

const giftTotal = sumOfGifts(price1, price2);

console.log(giftTotal);

function addTax(giftTotal) {
  return giftTotal + giftTotal * 0.08;
}
giftsWithTax = addTax(giftTotal);

console.log(giftsWithTax);
