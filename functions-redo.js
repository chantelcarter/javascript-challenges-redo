// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
// const marco = () => {
//     return "polo"
// }
// console.log(marco)
// ----> [Function: marco]
// const marco = () => {
//     return "polo"
// }
// console.log(marco())
// ----> polo
// have to invoke the function to log it <function name>()

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//     return `Welcome, ${name}!`
// }
// console.log(greeting("Bill"))
// ----> Welcome, Bill!

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (number) => {
//     if (number % 2 === 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }
// console.log(oddOrEven(3))
// ----> odd
// workd both ways

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (number) => {
//     return number * 3
// }
// console.log(triple(5))
// ----> 15

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (num1, num2) => {
//     return num1 * num2
// }
// console.log(multiply(3, 4))
// ----> 12

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (num1, num2) => {
//     if (num1 % num2 === 0) {
//         return `${num1} is evenly divisible by ${num2}`
//     } else {
//         return `${num1} is NOT evenly divisible by ${num2}`
//     }
// }
// console.log(divisibleBy(5, 2))
// ----> 5 is NOT evenly divisible by 2
// console.log(divisibleBy(4, 2))
// ----> 4 is evenly divisible by 2

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const assignGrade = (score) => {
//     if (score >= 90 && score <= 100) {
//         return "A"
//     } else if (score >= 80 && score <= 89) {
//         return "B"
//     } else if (score >= 70 && score <= 79) {
//         return "C"
//     } else if (score >= 60 && score <= 69) {
//         return "D"
//     } else if (score <= 59 && score >= 0) {
//         return "F"
//     } else {
//         return "no grade available"
//     }
// }
// console.log(assignGrade(98))
// ----> works for all

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const isLonger = (string1, string2) => {
//     if (string1.length > string2.length) {
//         return string1
//     } else if (string1.length < string2.length) {
//         return string2
//     } else {
//         return "they are the same"
//     }
// }
// console.log(isLonger("Bill", "Billy"))
// ----> Billy
// console.log(isLonger("Billy", "Billy"))
// ----> they are the same
// console.log(isLonger("Billy", "Bill"))
// ----> Billy

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (num1, num2) => {
//     if (num1 > num2) {
//         return num1
//     } else if (num1 < num2) {
//         return num2
//     } else {
//         return "they are equal"
//     }
// }
// console.log(greaterNum(1, 2))
// ----> 2
// console.log(greaterNum(3, 2))
// ----> 3
// console.log(greaterNum(3, 3))
// ----> they are equal

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// const yelling = (string) => {
//     return string.toUpperCase()
// }
// console.log(yelling("hello"))
// ----> HELLO

// 🏔 Stretch Goals

// The World Translator
// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
const helloWorld = (language) => {
    if (language === "es") {
        return "¡Hola Mundo!"
    } else if (language === "fr") {
        return "Bonjour le monde!"
    } else if (language === "de") {
        return "Hallo Welt!"
    } else if (language === "pt") {
        return "Olá Mundo!"
    } else if (language === "hu") {
        return "Helló Világ!"
    } else {
        return "Hello World!"
    }
}
// console.log(helloWorld("es"))
// ----> ¡Hola Mundo!
// console.log(helloWorld("fr"))
// ----> console.log(helloWorld("es"))
// console.log(helloWorld("de"))
// ----> Hallo Welt!
// console.log(helloWorld("pt"))
// ----> Olá Mundo!
// console.log(helloWorld("hu"))
// ----> Helló Világ!
// console.log(helloWorld("hi"))
// ----> Hello World!

// The Pluralizer
// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"

 // this is simply too long and i don't want to do it. also seems like i would have to use am object, and since we haven't gotten to that point when we learned functions i'm just going to save this for another day. i would have to use a ridiculous amount of conditional statements if i don't put items in an object (or class?) and i just don't feel like doing that right now.