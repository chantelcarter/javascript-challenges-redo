// 💻 Challenges
// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.
// describe("work", () => {
//     it("a function that returns 'drink coffee' if you are tired and 'keep working' if you are not tired.", () => {
//       expect(work("tired")).toEqual("drink coffee")
//       expect(work("not tired")).toEqual("keep working")
//     })
//   })

//   const work = (string) => {
//     if (string === "tired") {
//         return "drink coffee"
//     } else {
//         return "keep working"
//     }
//   }

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.
// describe("stress", () => {
//     it("a function that returns 'relax' if you are stressed and 'keep going' if you are not stressed.", () => {
//       expect(stress("i'm stressed")).toEqual("relax")
//       expect(stress("i'm okay")).toEqual("keep going")
//     })
//   })

//   const stress = (string) => {
//     if (string === "i'm stressed") {
//         return "relax"
//     } else {
//         return "keep going"
//     }
//   }

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.
// describe("budget", () => {
//     it("a function that returns 'in budget' if a price is lower than $300.", () => {
//       expect(budget("299")).toEqual("in budget")
//     })
//   })

//   const budget = (number) => {
//     if (number < 300) {
//         return "in budget"
//     } else {
//         return "out of budget"
//     }
//   }

// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.
// describe("smallNumber", () => {
//     it("a function that takes in two numbers and returns the smaller number.", () => {
//         const num1 = 1
//         const num2 = 2
//       expect(smallNumber(num1, num2)).toEqual(num1)
//     })
//   })

//   const smallNumber = (num1, num2) => {
//     if (num1 < num2) {
//         return num1
//     } else {
//         return num2
//     }
//   }

// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.
// describe("oddNumber", () => {
//     it("a function that takes in one numbers and returns whether the number is odd.", () => {
//         const num1 = 11
//       expect(oddNumber(num1)).toEqual("odd")
//     })
//   })

// const oddNumber = (num1) => {
//     if (num1 % 2 !== 0) {
//         return "odd"
//     } else {
//         return "even"
//     }
// }

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
// describe("fruit", () => {
//     it("a function that takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape.", () => {
//       expect(fruit("banana")).toEqual("yellow")
//       expect(fruit("apple")).toEqual("red")
//       expect(fruit("grape")).toEqual("purple")
//     })
//   })

// const fruit = (string) => {
//     if (string === "banana") {
//         return "yellow"
//     } else if (string === "apple") {
//         return "red"
//     } else if (string === "grape") {
//         return "purple"
//     } else {
//         return "i don't recognize this fruit"
//     }
// }

// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
// describe("rick", () => {
//     it("a function called rick that returns 'Morty'.", () => {
//       expect(rick("Rick")).toEqual("Morty")
//     })
//   })

// const rick = (name) => {
//     if (name === "Rick") {
//         return "Morty"
//     } else {
//         return "that is not Rick and Morty"
//     }
// }

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
// describe("greeter", () => {
//     it("a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.", () => {
//       expect(greeter("chantel")).toEqual("hello, chantel")
//     })
//   })

//   const greeter = (name) => {
//     return `hello, ${name}`
//   }

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// describe("oddOrEven", () => {
//     it("a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.", () => {
//       expect(oddOrEven(1)).toEqual("odd")
//       expect(oddOrEven(2)).toEqual("even")
//     })
//   })

// const oddOrEven = (number) => {
//     if (number % 2 !== 0) {
//         return "odd"
//     } else {
//         return "even"
//     }
// }

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// describe("doubler", () => {
//     it("a function called doubler that takes a number and returns the result of the number multiplied by 2.", () => {
//       expect(doubler(2)).toEqual(4)
//     })
//   })

//   const doubler = (number) => {
//     return number * 2
//   }

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// describe("multiply", () => {
//     it("a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.", () => {
//       expect(multiply(2, 3)).toEqual(2 * 3)
//     })
//   })

// const multiply = (num1, num2) => {
//     return num1 * num2
// }

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// describe("divisibleBy", () => {
//     it("a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs '10 is evenly divisible by 5'.", () => {
//       expect(divisibleBy(10, 5)).toEqual('10 is evenly divisible by 5.')
//     })
//   })

// const divisibleBy = (num1, num2) => {
//     if (num1 % num2 === 0) {
//         return `${num1} is evenly divisible by ${num2}.`
//     } else {
//         return `${num1} is not evenly divisible by ${num2}.`
//     }
// }

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.
// describe("fizzbuzz", () => {
//     it("a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.", () => {
//       expect(fizzbuzz(3)).toEqual('fizz')
//       expect(fizzbuzz(5)).toEqual('buzz')
//       expect(fizzbuzz(15)).toEqual('fizzbuzz')
//     })
//   })

//   const fizzbuzz = (number) => {
//     if (number % 3 === 0 && number % 5 === 0) {
//         return "fizzbuzz"
//     } else if (number % 3 === 0) {
//         return "fizz"
//     } else if (number % 5 === 0) {
//         return "buzz"
//     } else {
//         return number
//     }
//   }