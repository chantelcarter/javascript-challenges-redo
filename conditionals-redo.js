// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
// if ((34 / 3) > (67 / 2)) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Does 5 evaluate to the same as "5"?
// if (5 == "5") {
//     console.log(true)
// } else {
//     console.log(false)
// }
// ----> true

// if (5 === "5") {
//     console.log(true)
// } else {
//     console.log(false)
// }
// ----> false

// if (5 = "5") {
//     console.log(true)
// } else {
//     console.log(false)
// }
// ----> "SyntaxError: Invalid left-hand side in assignment"

// Does 5 strictly equal "5"?
// if (5 === "5") {
//     console.log(true)
// } else {
//     console.log(false)
// }
// ----> false

// Does !3 strictly equal 3?
// if (!3 === 3) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// ----> false

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
// if ("LEARN".length === 5 && "Student".length === 7) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// ----> true

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
// if ("LEARN".length === 5 || "Student".length === 10) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// ----> true

// Does "LEARN" contain the subset "RN"?
// if ("LEARN".includes("RN")) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// ----> true

// Does "LEARN" contain the subset "rn"?
// if ("LEARN".includes("rn")) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// ----> false

// Does "LEARN"[0] strictly equal "l"?
// if ("LEARN"[0] === "l") {
//     console.log(true)
// } else {
//     console.log(false)
// }
// ----> false

// Modify the code from the previous question to return true.
// if ("LEARN"[0] === "L") {
//     console.log(true)
// } else {
//     console.log(false)
// }
// ----> true

// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// const thePrice = 70
// if (thePrice < 100) {
//     console.log("in budget")
// } else {
//     console.log("out of budget")
// }
// ----> in budget

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
// const hungry = 6
// if (hungry <= 5) {
//     console.log("keep coding")
// } else {
//     console.log("eat food")
// }
// ----> eat food

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// const trafficLight = "green"
// if (trafficLight === "green") {
//     console.log("go")
// } else if (trafficLight === "yellow") {
//     console.log("slow down")
// } else {
//     console.log("stop")
// }
// ----> green

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
// const numberOne = 10
// const numberTwo = 11
// if (numberOne > numberTwo) {
//     console.log(numberOne)
// } else if (numberOne < numberTwo) {
//     console.log(numberTwo)
// } else {
//     console.log("they are the same")
// }
// ----> 11

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
// const oddOrEven = 5
// if (oddOrEven % 2 === 1) {
//     console.log("odd")
// } else if (oddOrEven === 0) {
//     console.log("zero")
// } else {
//     console.log("even")
// }
// ----> 5

// 🏔 Stretch Goals
// Write a conditional statement for the following prompts.

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
// const yourGrade = 0
// if (yourGrade === 100) {
//     console.log("perfect score")
// } else if (yourGrade >= 90 && yourGrade <= 99) {
//     console.log("A")
// } else if (yourGrade >= 80 && yourGrade <= 89) {
//     console.log("B")
// } else if (yourGrade >= 70 && yourGrade <= 79) {
//     console.log("C")
// } else if (yourGrade >= 60 && yourGrade <= 69) {
//     console.log("D")
// } else if (yourGrade <= 59 && yourGrade >= 1) {
//     console.log("F")
// } else {
//     console.log("no grade available")
// }
// ----> 0 && they all work

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
// const dataType = "hi"
// if (dataType === true || dataType === false) {
//     console.log(typeof dataType)
// } else {
//     console.log(typeof dataType)
// }
// ----> boolean
// ----> number
// ----> string

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
const password = "whatsup"
if (password.length >= 12 && password.includes('!')) {
   console.log("that is a mighty strong password!")
} else if (password.length >= 8 || password.includes('!')){
  console.log("that password is strong enough")
} else {
    console.log("that is not a valid password")
}
// ---->  that is a mighty strong password! <---- whatsuppunk!
// ----> that passwork is strong enough <---- whatsup!
// ----> that is not a valid password
