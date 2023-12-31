// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// const testArr1 = [3, 9, 15, 4, 10]
// const mulitiply = (array) => {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i] * 3)
//     }
//     return newArray
// }
// console.log(mulitiply(testArr1))
// ----> [ 9, 27, 45, 12, 30 ]
// // output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// const onlyOdd = (array) => {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i] % 2 !== 0)
//     }
//     return newArray
// }
// console.log(onlyOdd(testArr2))
// ----> [ false, false, true,  true, true,  false, false, true ]
// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// const onlyOdd = (array) => {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }
// console.log(onlyOdd(testArr2))
// ----> [ -7, 3, 5, 13 ]
// // output: [-7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// const comboArr = [
//   7,
//   "n",
//   true,
//   "i",
//   "c",
//   10,
//   "e",
//   -388,
//   "w",
//   3,
//   "o",
//   0,
//   "r",
//   false,
//   "k"
// ]
// const onlyStrings = (string) => {
//     let stringCombo = ""
//     for (let i = 0; i < string.length; i++) {
//         if (typeof string[i] === "string") {
//             stringCombo = stringCombo.concat(string[i])
//         }
//     }
//     return stringCombo
// }
// console.log(onlyStrings(comboArr))
// ----> nicework
// // output: "nicework"

// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// input: array of numbers
// output: array of numbers added together
// won't need a conditional statement, need a for loop
// const addArray = (number) => {
//     let addNumbers = 0
//     for (let i = 0; i < number.length; i++) {
//         addNumbers = addNumbers + number[i]
//     }
//     return addNumbers
// }
// console.log(addArray(addThese1))
// ----> 10
// // output: 10
// const addThese2 = []
// console.log(addArray(addThese2))
// ----> 0
// // output: 0

// Create a function that takes in an array of numbers and returns the index of the largest number.
// input: array of numbers
// output: largest number in array's index
// will need a for loop, and a conditional statement. need to use indexOf
// const indexHighestNumber = [1, 4, 2, 3]
// const largestNumber = (number) => {
//     let numberIndex = 0
//     for (let i = 0; i < number.length; i++) {
//         if (numberIndex < number[i]) {
//             numberIndex = number[i]
//         }
//     }
//     return numberIndex
// }
// console.log(largestNumber(indexHighestNumber))
// ----> 4
// need the index of 4
// const indexHighestNumber = [1, 4, 2, 3]
// const largestNumber = (number) => {
//     let theNumber = 0
//     let numberIndex = 0
//     for (let i = 0; i < number.length; i++) {
//         if (theNumber < number[i]) {
//             theNumber = number[i]
//             numberIndex = i
//         }
//     }
//     return numberIndex
// }
// console.log(largestNumber(indexHighestNumber))
// ----> 1
// // output: 1

// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// // output: [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

// const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

// const addUp3 = 600
// // output: 180300
// 🏔 Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
