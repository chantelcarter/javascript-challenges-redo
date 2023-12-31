// 💻 Challenges
// Coffee Maker: copy the given Coffee class into a text editor
// class Coffee {
//   constructor(type, cream, sugar) {
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile() {
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }

//   creams() {
//     if (this.cream > 1) {
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars() {
//     if (this.sugar > 1) {
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
// Write the code that makes a black coffee object
// const blackCoffee = new Coffee("black", 0, 0)
// Write the code that outputs the black coffee's profile
// console.log(blackCoffee.coffeeProfile())
// ----> A black coffee with 0 cream, 0 sugar
// Write the code that makes a coffee object with 1 cream and 2 sugars
// const basicCoffee = new Coffee("basic", 1, 2)
// Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(basicCoffee.coffeeProfile())
// ----> A basic coffee with 1 cream, 2 sugars

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// class Latte {
//     constructor(flavor, milk, shots){
//         this.flavor = flavor
//         this.milk = milk
//         this.shots = shots
//     }
// Write a method for your Latte class that outputs the latte's profile
//     latteProfile() {
//         return `A ${this.flavor} latte with ${this.milk} milk and ${this.shots} shots.`
//       }
// }
// Write the code that makes a regular, single shot latte
// const regularLatte = new Latte("regular", "2%", 1)
// Log the regular, single shot latte's profile
// console.log(regularLatte.latteProfile())
// ----> A regular latte with 2% milk and 1 shots.
// Write the code that makes a double shot, hazelnut latte with almond milk.
// const hazelnutLatte = new Latte("hazelnut", "almond", 2)
// Log the double shot, hazelnut latte with almond milk's profile.
// console.log(hazelnutLatte.latteProfile())
// ----> A hazelnut latte with almond milk and 2 shots.

// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// class Cylinder {
//     constructor(radius, height){
//         this.pi = Math.PI
//         this.radius = radius
//         this.height = height
//     }
    // this is how you call a function inside of a class
    // volume(){
// Write the code that rounds the volume of the cylinder to four decimal places
        // return parseFloat((this.pi * this.radius ** 2 * this.height).toFixed(4))
        // parseFloat changes a string into a number.
        // toFixed takes a number and allows you to adjust the decimal place, but returns the number as a string.
//     }
// }
// Write the code that creates three unique cylinder objects
// var cylinderVolume = new Cylinder(3, 4)
// console.log(cylinderVolume.volume())
// ----> 113.0973
// var cylinderVolume = new Cylinder(5, 6)
// console.log(cylinderVolume.volume())
// ----> 471.2389
// var cylinderVolume = new Cylinder(10, 14)
// console.log(cylinderVolume.volume())
// ----> 4398.2297