// Problem 01 - Print all numbers from 1 to N.

// let num = 15;

// for(let i = 1; i <= num; i++){
//   console.log(i)
// }



// Problem 02 - Print all numbers from N to 1 using above loop

// let num = 15;

// for(let i = 1; i <= num; i++){
//   console.log(num - i + 1)
// }



// Problem 03 - Print all even numbers from 1 to N.

// let num = 25;

// for(let i = 2; i <= num; i = i + 2) {
//   console.log(i)
// }



// Problem 04 - Print sum of first N natural number.

// let num = 9
// let sum = 0;

// for(let i = 1; i <= num; i++) {
//   sum += i;
// }

// console.log(`sum of first ${num} numbers : ${sum}`);

// optimize solution

// let num = 5;
// let sum = 0;

// sum = (num * (num + 1)) /2

// console.log(sum);



// Problem 05 - Print factorial of N.

// let num = 5;
// let factorial = 1;

// for(let i = 1; i <= num; i++) {
//   factorial = factorial * i;
// }

// console.log(`Factorial of ${num}! : ${factorial}`)



// Problem 06 - Print sum of all even numbers upto N;

// let num = 25;
// let sum = 0;

// for(let i = 2; i <= num; i = i + 2) {
//   sum += i;
// }

// console.log(`sum of even numbers upto ${num} : ${sum}`);



// Problem 07 - Print square of numbers upto N.

// let num = 10;

// for(let i = 1; i <= num; i++) {
//   console.log(`square of ${i} : ${i ** 2}`)
// }



// Problem 08 - Print all numbers divisible by 3 and 5 upto N.

// Brute force

// let num = 100;

// for(let i = 1; i <= num; i++) {
//   if(i % 3 === 0 && i % 5 === 0) {
//     console.log(i)
//   }
// }

// optimize solution

// for(let i = 15; i < num; i = i + 15) {
//   console.log(i)
// }



// Problem 09 - Print sum of all odd numbers upto N

// Brute force

// let num = 10;
// let sum = 0;

// for(let i = 1; i < num; i++) {
//   if(i % 2 !== 0) {
//     sum += i;
//   }
// }

// console.log(`sum of all odd numbers upto ${num} : ${sum}`)

// optimize solution

// for (let i = 1; i < num; i = i + 2) {
//   sum += i;
// }

// console.log(`sum of all odd numbers upto ${num} : ${sum}`);



// Problem 10 - Print cubes of all numbers upto N.

// let num = 10;

// for(let i = 1; i <= num; i++) {
//   console.log(Math.pow(i, 3))
// }




// Problem 11 - Print all numbers that are both even and perfect squares

// let num = 50;

// for(let i = 1; i * i <= num; i++) {
//   if(i * i % 2 === 0)
//   console.log(i * i)
// }