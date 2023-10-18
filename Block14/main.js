// <---------------------------Vowels and consonants----------------->

function countVowelsAndConsonants(inputString) {
  // Initialize counters for vowels and consonants
  let vowelCount = 0;
  let consonantCount = 0;

  // Convert the input string to lowercase to handle both lowercase and uppercase letters
  inputString = inputString.toLowerCase();

  // Iterate through each character in the input string
  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i];

    // Check if the current character is a vowel
    if (
      currentChar === 'a' ||
      currentChar === 'e' ||
      currentChar === 'i' ||
      currentChar === 'o' ||
      currentChar === 'u'
    ) {
      vowelCount++;
    } else if (currentChar >= 'a' && currentChar <= 'z') {
      // Check if the current character is a consonant
      consonantCount++;
    }
  }

  // Print the result
  console.log(`Word: ${inputString}`);
  console.log(`Vowels: ${vowelCount}`);
  console.log(`Consonants: ${consonantCount}`);
}

// Test the function with an example input
countVowelsAndConsonants('hello');

// ['ukelele', 'awesome', 'onomonopia', 'textbook']

// <--------------------Reverse Array using for loop--------------------->

function reverseArray(arr) {
  const reversedArray = [];

  // Iterate through the original array in reverse order
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

// Test the function with an example array
const originalArray = [1, -1, 2, -3, 5, -8, 13];
const reversedArray = reverseArray(originalArray);

console.log('Original Array:', originalArray);
console.log('Reversed Array:', reversedArray);

// [1, 2, 3]; [20, 50, 30, 60, 200]; [1, 3, 5, 7, 9, 11];-----other arrays to test

// <-------------------------Fizz Buzz -------------------------->

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();




