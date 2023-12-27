// 💻 Challenges
// Create a for loop that logs each number from 1 - 20.
// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }
// ----> logs 1-20

// Create a for loop that logs every other number from 1 - 20.
// for (let i = 1; i <= 20; i = i + 2) {
//     console.log(i)
// }
// ----> 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// for (let i = 0; i <= 20; i = i + 2) {
//     console.log(i)
// }
// ----> 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// Create a for loop that logs the result of each number from 1 - 20 tripled.
// for (let i = 1; i <= 20; (i++) * 3) {
//     console.log(i)
// }
// ----> 1-20
// for (let i = 1; i <= 20; i++) {
//     console.log(i * 3)
// }
// ----> 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// for (let i = 1; i <= 20; i = i + 2) {
//     console.log(i)
// }
// ----> 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// for (let i = 1; i <= 20; i = i + 2) {
//     console.log(i)
//     console.log("ODD")
// }
// ----> 1, ODD, 3, ODD, 5, ODD, 7, ODD, 9, ODD, 11, ODD, 13, ODD, 15, ODD, 17, ODD, 19, ODD
// ----> actually did this the wrong way
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     } else {
//         console.log("ODD")
//     }
// }
// ----> ODD, 2, ODD, 4, ODD, 6, ODD, 8, ODD, 10, ODD, 12, ODD, 14, ODD, 16, ODD, 18, ODD, 20
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc

// Consider this variable:
// const nums = [3, 57, -9, 20, 67]

// Create the code that will log the largest number from the array.
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > nums[0]) {
//         console.log(nums[i])
//     }
// }
// ----> 57, 20, 67
// ----> got this from chatgpt, but it's not doinog exactly what i would like it to do.
// ----> i need it to log only one number, and i would like to not hard code it, but since we didn't really learn much about dynamic code at this time, i'll be hard coding it anyway.
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > nums[1]) {
//         console.log(nums[i])
//     }
// }
// ----> 67

// Create the code that will log the smallest number from the array.
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < nums[0]) {
//         console.log(nums[i])
//     }
// }
// ----> -9

// Create the code that will log the remainder of each number when divided by 2.
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i] % 2)
// }
// ----> 1, 1, -1, 0, 1
// Expected output: 1, 1, -1, 0, 1

// Consider this variable:
const myString = "learn student"

// Create the code that will log the number of times the letter "e" occurs in the string.
// for (let i = 0; i < myString.length; i++) {
//     if (myString[i] === "e") {
//         console.log(myString[i])
//     }
// }
// ----> e, e
// for (let i = 0; i < myString.length; i++) {
//     if (myString[i] === "e") {
//         console.log(myString[i].length)
//     }
// }
// ----> 1, 1
// let count = 0
// for (let i = 0; i < myString.length; i++) {
//     if (myString[i] === "e") {
//         count++
//     }
// }
// console.log(count)
// ----> 2
// i'm not particually happy that i couldn't achieve this result without adding another variable, but this is what chatgpt came up with.

// Create the code that will log every other character in the string.
// for (let i = 0; i < myString.length; i = i + 2) {
//     console.log(myString[i])
// }
// ----> l, a, n, s, u, e, t

// 🏔 Stretch Goals
// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// for (let i = 5; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }
// ---->
// 5 is odd
// 6 is even
// 7 is odd
// 8 is even
// 9 is odd
// 10 is even
// 11 is odd
// 12 is even
// 13 is odd
// 14 is even
// 15 is odd
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc

// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbuzz")
//     } else if (i % 3 === 0) {
//         console.log("fizz")
//     } else if (i % 5 === 0) {
//         console.log("buzz")
//     } else {
//         console.log(i)
//     }
// }
// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc
// i kept not getting fizzbuzz back, but i asked chat and it said i needed to rearrange the order of the conditional statement and that the condition needs to check for multiples of 3 and 5 FIRST. i am v happy with this