// <!--------------------------------------------is truthy-----------------------------------------------!>
console.log(
  '-------------------------------------is truthy-------------------------------------------------'
);

if ('I am string') {
  console.log('true');
} else {
  console.log('false');
}

if (false) {
  console.log('true');
} else {
  console.log('The boolean value false is falsy');
}

if (null) {
  console.log('true');
} else {
  console.log('The null value is falsy');
}

if (undefined) {
  console.log('true');
} else {
  console.log('undefined is falsy');
}

if (0) {
  console.log('true');
} else {
  console.log('The number is falsy-the only falsy number');
}

if ('') {
  console.log('true');
} else {
  console.log('The empty string is falsy (the only falsy string)');
}

// <!-------------------------------------------nUmber line -------------------------------------------------!>
console.log(
  '------------------------------numberline----------------------------------'
);

let numline1 = 50;
let numline2 = 51;
let sum = numline1 + numline2;

if (sum >= 100) {
  console.log(`${sum} is greater than 100`);
} else if (sum <= -1000) {
  console.log(`${sum} is less than -1000`);
} else if (sum < 0) {
  console.log(`${sum} is a negative number`);
} else if ((sum = 0)) {
  console.log(`${sum} is equal to 0`);
} else {
  console.log(`${sum} is larger than 0`);
}

numline1 = 99;
numline2 = -2;
sum = numline1 + numline2;

if (sum > 0) {
  console.log(`${sum} is greater than 0`);
} else if (sum < -1000) {
  console.log(`${sum} is less than -1000`);
} else if (sum < 0) {
  console.log(`${sum} is a negative number`);
} else if ((sum = 0)) {
  console.log(`${sum} is equal to 0`);
} else {
  console.log(`${sum} is greater than 100`);
}

numline1 = 0;
numline2 = 101;
sum = numline1 + numline2;

if (sum >= 100) {
  console.log(`${sum} is greater than 100`);
} else if (sum <= -1000) {
  console.log(`${sum} is less than -1000`);
} else if (sum < 0) {
  console.log(`${sum} is a negative number`);
} else if ((sum = 0)) {
  console.log(`${sum} is equal to 0`);
} else {
  console.log(`${sum} is larger than 0`);
}

numline1 = 500;
numline2 = -500;
sum = numline1 + numline2;

if (sum >= 0) {
  console.log(`${sum} is equal to 0`);
} else if (sum <= -1000) {
  console.log(`${sum} is less than -1000`);
} else if (sum < 0) {
  console.log(`${sum} is a negative number`);
} else if (sum >= 100) {
  console.log(`${sum} is greater than 100`);
} else {
  console.log(`${sum} is larger than 0`);
}

numline1 = -1000;
numline2 = 0;
sum = numline1 + numline2;

if (sum <= -1000) {
  console.log(`${sum} is a negative number`);
} else if ((sum = 0)) {
  console.log(`${sum} is equal to 0`);
} else if (sum < 0) {
  console.log(`${sum} is a negative number`);
} else if (sum >= 100) {
  console.log(`${sum} is greater than 100`);
} else {
  console.log(`${sum} is larger than 0`);
}

numline1 = -5;
numline2 = 0;
sum = numline1 + numline2;

if (sum <= 0) {
  console.log(`${sum} is a negative number`);
} else if ((sum = 0)) {
  console.log(`${sum} is equal to 0`);
} else if (sum <= -1000) {
  console.log(`${sum} is less than -1000`);
} else if (sum >= 100) {
  console.log(`${sum} is greater than 100`);
} else {
  console.log(`${sum} is larger than 0`);
}

// <!--------------------------------------Greater than 5 -----------------------------------------------------!>
console.log(
  '-------------------------------------greater than 5----------------------------------------'
);

let num1 = 5;
let num2 = 6;

if (num1 >= 5 && num2 >= 5) {
  console.log('true');
} else {
  console.log(false);
}

num1 = 10;
num2 = 11;

if (num1 >= 5 && num2 >= 5) {
  console.log('true');
} else {
  console.log(false);
}

num1 = 0;
num2 = 1;

if (num1 >= 5 && num2 >= 5) {
  console.log('true');
} else {
  console.log(false);
}

num1 = 1000;
num2 = -1000;

if (num1 >= 5 && num2 >= 5) {
  console.log('true');
} else {
  console.log(false);
}

num1 = 6;
num2 = 4;

if (num1 >= 5 && num2 >= 5) {
  console.log('true');
} else {
  console.log(false);
}

num1 = 5;
num2 = 5;

if (num1 >= 5 && num2 >= 5) {
  console.log('true');
} else {
  console.log(false);
}

// <!-------------------------------------Pair and Compare -------------------------------------------------!>
console.log(
  '----------------------------------pair and compare------------------------------------------'
);

let param1A = 'cat';
let param1B = 'cat';
let param2A = 6;
let param2B = '6';

if (param1A === param1B || param2A === param2B) {
  console.log('true');
} else {
  console.log('false');
}

let var1A = 'five';
let var1B = 5;
let var2A = 'dog';
let var2B = 'dawg';

if (var1A === var1B || var2A === var2B) {
  console.log('true');
} else {
  console.log('false');
}

let data1A = 0;
let data1B = false;
let data2A = 'horse';
let data2B = 'horse';

if (data1A === data1B || data2A === data2B) {
  console.log('true');
} else {
  console.log('false');
}

let num1A = 'eight';
let num1B = 'eight';
let num2A = 'ate';
let num2B = 'ate';

if (num1A === num1B || num2A === num2B) {
  console.log('true');
} else {
  console.log('false');
}

let prop1A = 11;
let prop1B = 'eleven';
let prop2A = 'four';
let prop2B = 'for';

if (prop1A === prop1B || prop2A === prop2B) {
  console.log('true');
} else {
  console.log('false');
}

let val1A = 'cake';
let val1B = 'cake';
let val2A = 'pie';
let valB = 'pie';

if (val1A === val1B || val2A === val2B) {
  console.log('true');
} else {
  console.log('false');
}
