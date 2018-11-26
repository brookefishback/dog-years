/*This script converts your age to dog years, only edit your age to get your custom result. Here's how you convert your age from "human years" to "dog years": 
The first two years of a dog's life count as 10.5 dog years each.
Each year following equates to 4 dog years.*/

//Your age variable - edit to your age
const myAge = 26

//The first two years of a dog's life are equal to 10.5 years
let earlyYears = 2
earlyYears = earlyYears * 10.5
console.log(earlyYears)

//All remaining human years are worth 4 dog years
let laterYears = (myAge - 2)*4
console.log(laterYears)

//Combine early and later years for total age in dog years
var myAgeInDogYears = earlyYears + laterYears

//Store name as lowercase string
var myName = 'Brooke'.toLowerCase()

//Print statement
console.log('My name is ' + myName + '. I am ' + myAge + ' years old which is ' + myAgeInDogYears + ' years old in dog years.')