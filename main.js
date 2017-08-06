// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(x,y){
  if (x<y){
    return y
  } else {
    return x
  }

}

console.log(max(8,5));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(x,y,z){
if (x < y && z < y){
  return y
} else if (y < z && x < z) {
  return z
} else {
  return x
}
}
console.log(maxOfThree(7,9,5));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
  if (char == 'a'|'i'|'u'|'e'|'o') {
    return true
  } else {
    return false
  }
}

console.log(isVowel('q'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum (x,y) {
  added = x + y
  return added
}

console.log(sum(4,6));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:


function avg (x,y,z) {
  add = x + y + z
  return add/3

}

console.log(avg(3,5,7));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength(x) {
  return x.length
}

console.log(getLength("someword"));
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan(x,y){
  if (x < y) {
    return true
  } else {
    return false
  }
}
console.log(greaterThan(6,9));
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet(name){
  greeting = "Hello, " + name + "!"
  return greeting
}

console.log(greet("cardi"));
// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madlib (w1,w2,w3,w4){
  adlib = "so.. my, " + w1 + " wants to go to, " + w2 + " but sometimes it " + w3 + " so why dont we " + w4 + "."
  return adlib
}

console.log(madlib("cat","the moon","doesnt like space","take a cat nap"));
