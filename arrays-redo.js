// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Consider the variable:
// var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
// console.log(groceryList.push("soda"))
// ----> 4
// console.log(groceryList)
// ----> [ 'chips', 'dip', 'cookies', 'soda' ]

// Write the code that will add "granola" to the end of the array without altering the original array.
// var addItem = ["granola"]
// console.log(groceryList.concat(addItem))
// ----> [ 'chips', 'dip', 'cookies', 'granola' ]
// console.log(groceryList)
// ----> [ 'chips', 'dip', 'cookies' ]

// Write the code that will return a subset of the array containing only "chips" and "dip".
// console.log(groceryList.pop())
// ----> cookies
// console.log(groceryList)
// ----> [ 'chips', 'dip' ]

// Write the code that will add "beans" to the "chips" and "dip" array.
// console.log(groceryList.push("beans"))
// ----> 3
// console.log(groceryList)
// ----> [ 'chips', 'dip', 'beans' ]

// Consider the variable:
// var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.
// console.log(numbers.unshift(0))
// ----> 6
// console.log(numbers)
// ----> [ 0, 2, 4, 6, 8, 10 ]

// Write the code that will add the number 12 to the end of the array.
// console.log(numbers.push(12))
// ----> 6
// console.log(numbers)
// ----> [ 2, 4, 6, 8, 10, 12 ]

// Write the code that will remove the first number from the array.
// console.log(numbers.shift())
// ----> 2
// console.log(numbers)
// ----> [ 4, 6, 8, 10 ]

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
// var moreNumbers = [0]
// console.log(moreNumbers.concat(numbers))
// ----> [ 0, 2, 4, 6, 8, 10 ]
// console.log(numbers)
// ----> [ 2, 4, 6, 8, 10 ]

// Consider the variable:
// var numSet = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.
// console.log(numSet.indexOf(2))
// ----> 0

// Write the code that finds the index of the last appearance of the number 2.
// console.log(numSet.lastIndexOf(2))
// ----> 5

// Write the code that returns the number at the third index.
// console.log(numSet.indexOf(6))
// ----> 2
// console.log(numSet.indexOf(8))
// ----> 3

// Consider the variable:
// var characters = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the characters array together into a string.
// console.log(characters.join(""))
// ----> yarra

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
// var charsReversed = characters.reverse()
// console.log(charsReversed)
// ----> [ 'a', 'r', 'r', 'a', 'y' ]

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// console.log(charsReversed.join("*"))
// ----> a*r*r*a*y

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
// console.log(charsReversed.join(""))
// ----> array

// Create two arrays consisting of three first names of your cohort members in each array.
// var cohortOne = ["Chantel", "Sakaa", "Jimmy"]
// var cohortTwo = ["Micheal", "Isaac", "Tomas"]

// Write the code that sorts the names in alphabetical order.
// console.log(cohortOne.sort())
// console.log(cohortTwo.sort())
// ----> [ 'Chantel', 'Jimmy', 'Sakaa' ]
// ----> [ 'Isaac', 'Micheal', 'Tomas' ]

// Write the code that sorts the names in reverse alphabetical order.
// console.log(cohortOne.reverse())
// console.log(cohortTwo.reverse())
// ----> [ 'Sakaa', 'Jimmy', 'Chantel' ]
// ----> [ 'Tomas', 'Micheal', 'Isaac' ]

// Write the code that sorts all the names in alphabetical order in a single array.
// console.log(cohortOne.concat(cohortTwo).sort())
// ----> [ 'Chantel', 'Isaac', 'Jimmy', 'Micheal', 'Sakaa', 'Tomas' ]

// Consider the variables:
var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.
// console.log([numbers % 3 === 1])
// ----> false
// console.log(numbers % 2 !== 0)
// ----> true
// for (let i = 1; i < numbers.length; i = i + 2) {
//     oddIndexes.push(numbers[i])
// }
// console.log(oddIndexes)
// ----> used chatgpt: [221, 7, 87]
// at this point we hadn't learned loops yet

// Write the code that adds the values from odd indexes into the oddIndexes array.
// i'm giving up here. may come back after doing loops challenges
