// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Write the code that will log the output of 34 added to 71.
// console.log(34 + 71)

// Write the code that will log the output of 67 subtracted from 123.
// console.log(67 - 123)

// Write the code that will log the output of 56 multiplied by 23.
// console.log(56 * 23)

// Write the code that will log the output of 45 divided by 5.
// console.log(45 / 5)

// Write the code that will log the output of 5 to the power of 7.
// console.log(5 ** 7)
// Write the code that will log the whole number remainder of 33 divided by 6.
// console.log(33 % 6)

// Write the code that will log the length of a string containing your name.
// console.log("chantel".length)

// Write the code that will log whether your string includes the letter "e"?
// console.log("chantel".includes("e"))
var myName = "chantel"
// console.log(myName.includes("e"))

// Write the code that will log the character at the first index of the string.
// console.log(myName[0])

// Write the code that will log the string in all uppercase letters.
// console.log(myName.toUpperCase())

// Consider the variables:

const theQuestion = "life, the universe, and everything"
const theAnswer = 42

// Write the code that will log theAnswer divided by 2.
// console.log(theAnswer / 2)

// Write the code that will log the whole number remainder of theAnswer when divided by 3.
// console.log(theAnswer % 3)

// Write the code that will log the length of theQuestion.
// console.log(theQuestion.length)

// Write the code that will log the length of theQuestion divided by 2.
// console.log(theQuestion.length / 2)
// console.log((theQuestion.length) / 2)
// -----> both work

// Write the code that will log the length of theQuestion added to theAnswer.
// console.log(theQuestion.length + theAnswer)

// Write the code that will log the index of the character "f" in the theQuestion.
// console.log(theQuestion.indexOf("f"))

// Write the code that will log the index of the second comma in the theQuestion.
// console.log(theQuestion.charAt(18))
// ----> ,
// const secondComma = (theQuestion.charAt(18))
// console.log(theQuestion.indexOf(secondComma))
// // ----> 4????
// console.log(theQuestion.slice(0,5).indexOf(","))
// ----> 4

// Write the code that will log the concatenation of the two variables.
// console.log(theQuestion + theAnswer)

// Write the code that will log the character "l" from theQuestion.
// console.log(theQuestion.charAt(0))

// Write the code that will extract "the universe" from theQuestion.
// console.log(theQuestion.slice(6, 18))

// Write the code that will extract "everything" from theQuestion.
// console.log(theQuestion.slice(24, 34))

// Write the code that will log the last character of theQuestion without manually counting the number of characters.
console.log(theQuestion.charAt(theQuestion.length - 1))
// ----> g
console.log(theQuestion.slice(-1))
// ----> g
console.log(theQuestion.at(-1))
// ----> g