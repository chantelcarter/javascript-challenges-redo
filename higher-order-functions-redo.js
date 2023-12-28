// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]

// const multiplier = arr1.map((value) => {
//     return value * 10
// })
// console.log(multiplier)
// ----> [ 30, 90, 150, 40, 100 ]
// // output: [30, 90, 150, 40, 100]
// if i wanted to make it shorter i can remove the return, as it's already implied, if there is only one line of code to be executed.
// const arr1 = [3, 9, 15, 4, 10]

// const multiplier = arr1.map((value) => value * 10)
// console.log(multiplier)
// ----> [ 30, 90, 150, 40, 100 ]
// and if i wanted to make the function reusuable i can do this:
// const arr1 = [3, 9, 15, 4, 10]

// const multiplier = (array) => {
//     return array.map((value) => value * 10)
// }
// console.log(multiplier(arr1))
// ----> [ 30, 90, 150, 40, 100 ]
// now the code would be able to take in any array.

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]

// const divider = (array) => {
//     return array.map((value) => value / 2)
// }
// console.log(divider(arr1))
// ----> [ 1.5, 4.5, 7.5, 2, 5 ]
// // output: [1.5, 4.5, 7.5, 2, 5]

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// input: one array
// output: one array of odd numbers only
// will have to use filter because the array isn't going to be the same length as before.

// create a function that takes in any array
// const onlyOdd = (array) => {
//     // return a higher order function that takes in the value.
//     return array.filter((value) => value % 2 !== 0)
// }
// console.log(onlyOdd(arr2))
// ----> [ 7, 3, 5, 13, -9 ]
// // output: [7, 3, 5, 13, -9]

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
// const pumbaa =
//   "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// input: a string
// output: an array of strings
// will need to split the string to make an array. and iterate through each value and see which string has an odd number of characters. then filter out the strings with even characters.
// need to get the LENGTH of the value
// const oddChar = (array) => {
//     const newArray = array.split(" ")
//     return newArray.filter((value) => value.length % 2 !== 0)
// }
// console.log(oddChar(pumbaa))
// ----> [ 'a', 'wonderful', "ain't", 'passing', 'craze' ]
// // output: ["a", "wonderful", "ain't", "passing", "craze"]

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// const onlyStrings = (array) => {
//     return array.filter((value) => {
//         return typeof value === "string"
//     }).join("")
// }
// console.log(onlyStrings(comboArr))
// ----> nicework
// // output: "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]

// const arrayValues = (array) => {
//     return array.filter((value) => {
//         return value !== false && 
//         value !== null && 
//         value !== 0 &&
//         value !== ""
//     })
// }
// console.log(arrayValues(filterArrayValues))
// ----> [ 58, 'abcd', true ]
// // output: [58, "abcd", true]

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// will have to split each string and then join them back
// doing something to each value in the array, use map
// doig something to every other index after the strings are split, and nothing to the other values. will need a conditional statement.
// const wackyWords = (array) => {
//     return array.map(value => {
//         return value.split("").map((value, index) => {
//             if (index % 2 !== 0) {
//                 return value.toUpperCase()
//             } else {
//                 return value
//             }
//         }).join("")
//     })
// }
// console.log(wackyWords(makesWackyWords))
// ----> [ 'sImBa', 'nAlA', 'zAzU', 'rAfIkI' ]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"

// const noVowels = (string) => {
//     return string.split("").filter(value => {
//         return value !== "a" &&
//         value !== "e" &&
//         value !== "i" &&
//         value !== "o" &&
//         value !== "u"
//     }).join("")
// }
// console.log(noVowels(str))
// ----> jvscrpt s wsm
// // output: "jvscrpt s wsm"

// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
// const stringOfNumbers = "4574328"

// const arrayOfNumbers = (array) => {
//     return array.split("").map((value) => {
//         return parseFloat(value)
//     })
// }
// console.log(arrayOfNumbers(stringOfNumbers))
// ----> [ 4, 5, 7, 4, 3, 2, 8 ]
// // output: [4, 5, 7, 4, 3, 2, 8]
// found parseFloat method through chatgpt

// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]

// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
// const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// // output: "yo!"