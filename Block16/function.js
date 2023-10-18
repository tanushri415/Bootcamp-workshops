// starter code---Discount Chain workshop

const timmy = {
  prescription: 'acetaminophen',
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: 'diphenhydramine',
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: 'phenylephrine',
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

// we have to create a variable for calculate total refill of each customer
// create a condition to check if customer has subscrition and if customer has coupon and accordingly return the new refill total.
// the print out each customers refill total

function finalAmount(customer) {
  // creating variable for calculating refill total for each customer
  let refillTotal = customer.pricePerRefill * customer.refills;
  // checking if customer has subscription
  if (customer.subscription === true) {
    refillTotal *= 0.75;
  }
  // checking if customer has coupon
  if (customer.coupon === true) {
    refillTotal -= 10;
  }
  return refillTotal;
}

// passing the 3 customers as paramenters in the function

const finalAmountTimmy = finalAmount(timmy);
const finalAmountSarah = finalAmount(sarah);
const finalAmountRocky = finalAmount(rocky);

// consolelog the output - the grand total for all the Customers
console.log(`Timmy = Your grand total is $${finalAmountTimmy}`);
console.log(`Sarah = Your grand total is $${finalAmountSarah}`);
console.log(`Rocky= Your grand total is $${finalAmountRocky}`);
