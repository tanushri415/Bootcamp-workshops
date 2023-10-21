// For Each

const names = ['denya', 'peng', 'john'];
console.log(names);
console.log('-----------Printing all names---------');
names.forEach((name) => {
  console.log(name);
});

//  map method- does not mutate the original array

const excitingNames = names.map((name) => name + ' !!!');
console.log(excitingNames);
console.log(names);

// Reduce Method

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log('sum ' + sum);

// Filter method-----
const records = [
  { name: 'john', occupation: 'doctor', salary: '2500' },
  { name: 'john', occupation: 'lawyer', salary: '3500' },
  { name: 'john', occupation: 'fisherman', salary: '4500' },
];

const higherSalaries = records.filter((record) => record.salary >= 2000);
console.log(higherSalaries);
console.log(records);

// sort method ---mutates the original array

const sorted = names.sort();
console.log(sorted);

const myNums = [88, 91, 0, 7, 3, 1];
myn;
