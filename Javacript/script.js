// let js = "amazing";
// if (js === "amazing") alert("Javascript is FUN!");

// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);

// // Values and varible

// console.log("Smart");
// console.log("28");

// let firstName = "Smartd";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// // variable naming conventions
// let Smart_Dickson = "SD";
// let $function = 27;

// let person = "smart";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "Programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// // Data Types (a) Object (b) Primitive
// //The 7 Primitive Data Types
// true;

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // typeof
// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // // console.log(typeof 29);
// // // console.log(typeof "Smart");

// // javascriptIsFun = "YES!";
// // console.log(typeof javascriptIsFun);

// // //
// // let year;
// // console.log(year);
// // console.log(typeof year);

// // year = 1991;
// // console.log(typeof year);

// // console.log(typeof null);

// LET ,CONST AND VAR

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// // const job;

// var job = "programmer";
// job = "teacher";

// lastName = "Jobman";
// console.log(lastName);

//BASIC OPERATORS
// maths operators
// const now = 2037;
// const ageJobman = now - 1991;
// const agesarah = now - 2018;
// console.log(ageJobman, agesarah);

// console.log(ageJobman * 2, ageJobman / 10, 2 ** 3);
// //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Jobman";
// const lastName = "dallon";
// console.log(firstName + " " + lastName);

// // Assignment operators

// let x = 10 + 5; //15
// x += 10; //x = x + 10 = 25
// x *= 4; //x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// // Comparsion operators
// console.log(ageJobman > agesarah); // >,<,>=,<=

// console.log(agesarah >= 18);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);
// Operator Precedence
let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x =10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// =============== problem solving================
// JavaScript Fundamentals – Part 1
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHeigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHeigherBMI);

// ==== strings and template literals =======

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;

const jonas = "i'm' + firstName + ', a";
