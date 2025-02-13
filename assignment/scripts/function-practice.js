console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return (`Hello, ${name}!`);
}
// I keep thinking about console.log that's why I had in there before
console.log(helloName('Ken'));

// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // I didn't know you can just call the two numbers without console.log until the Tuesday we met in person
  return firstNumber + secondNumber;
}

console.log(addNumbers(12345, 67890));

// 4. Function to multiply three numbers & return the result
function multiplyThree(n1, n2, n3 ){
  return n1 * n2 * n3;
}

console.log(multiplyThree(45, 5, 11));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'If isPositive more than 0 then it should be true:', isPositive(3));

console.log( 'isPositive - should say false', isPositive(0) );
console.log( ' if isPositive equal to 0 then it should be false:', isPositive(0));

console.log( 'isPositive - should say false', isPositive(-3) );
console.log( ' if isPositive less than 0 then it should be fasle:', isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length === 0) {
    return undefined;
  }
    return array[array.length - 1];
}

console.log(getLast([]));
console.log((getLast([1, 2, 3, 4, 5])));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find


function groceryList( value, array ) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
      return false;
}

console.log('item in grocery list:', groceryList('veggies', ['steak', 'chicken', 'veggies']));
console.log('item not in grocery list:', groceryList('eggs', ['steak', 'chicken', 'veggies']));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  // TODO: loop to add items
    return sum;
}
console.log(sumAll([1, 2 ,3, 4, 5, 6, 7]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function numbers(arr) {
  let positiveNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNum.push(arr[i]);
    }
  }
    return positiveNum;
}


console.log(`expect to show (3, 4): ${numbers([-1, 3, -3, 4, -6])}`);
console.log(`expect to be empty: ${numbers([-1, -2, -3])}`);

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// problem from CodeWars
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  var vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      vowelsCount++;
    }
  }
    return vowelsCount;
  // enter your majic here
}

console.log(getCount('this website is awesome'));
