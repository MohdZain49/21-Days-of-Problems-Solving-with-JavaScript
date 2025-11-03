// Problem 01 - Find the maximum of there numbers.

// function findGreatest(num1, num2, num3) {
//   if (num1 >= num2 && num1 >= num3) {
//     return num1;
//   } else if (num2 >= num1 && num2 >= num3) {
//     return num2;
//   } else {
//     return num3;
//   }
// }

// let greatestNumber = findGreatest(32, 54, 29);
// greatestNumber = findGreatest(4, 4, 2);

// console.log(`${greatestNumber} is the greatest.`);

// Problem 02 - Check if a number is positive, negative or zero.

// function checkNumberSign(num) {
//   if (num === 0) {
//     console.log("0 is neither positive or negative");
//   } else if (num > 0) {
//     console.log(`${num} is positive`);
//   } else {
//     console.log(`${num} is negative`);
//   }
// }

// checkNumberSign(10)

// Problem 03 - Calculate electricity bill

// function calculateBill(units = 0) {
//   let amount = 0;

//   if (units <= 100) {
//     amount = units * 5;
//   } else if (units <= 200) {
//     amount = (100 * 5) + ((units - 100) * 7);
//   } else if (units <= 300) {
//     amount = (100 * 5) + (100 * 7) + ((units - 200) * 10);
//   } else {
//     amount = (100 * 5) + (100 * 7) + (100 * 10) + ((units - 300) * 12);
//   }

//   return amount;
// }

// let electricityBill;
// electricityBill = calculateBill(250);

// console.log(`Electricity bill :  ₹${electricityBill}`);

// Problem 04 - Check a character is vowel or consonant

// function checkVowel(char) {
//   if ("aeiou".includes(char) && char !== "") {
//     return "vowel"
//   } else if(/[a-z]/.test(char.toLowerCase())) {
//     return "consonant"
//   }
//   return "Not a valid letter"
// }

// console.log(checkVowel('a'))

// Problem 05 - Check year is leap year or not

// function isLeapYear(year) {
//   if(year % 400 === 0) {
//     return "Yes"
//   } else if(year % 100 !== 0) {
//     return false
//   } else if(year % 4 === 0) {
//     return true
//   }
//   return false;
// }

// console.log(isLeapYear(2000));

// Problem 06 - Check Character

// function checkCharacter(char) {

//   const charCode = String(char).charCodeAt(0);

//   if (char === undefined) {
//     return "undefined"
//   } else if(char === "") {
//     return "Empty String"
//   } else if(charCode >= 48 && charCode <= 57) {
//     return "Number"
//   } else if (charCode >= 65 && charCode <= 90 ) {
//     return "Upper Case";
//   } else if (charCode >= 97 && charCode <= 122) {
//     return "Lower Case";
//   } else {
//     return "Special Character"
//   }
// }

// console.log(checkCharacter(""));

// Problem 07 - Check trianle type

function checkTringle(side1, side2, side3) {
  if (side1 === side2 && side1 === side3) {
    console.log("Equilateral triangle");
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    if (isRightTriangle(side1, side2, side3)) {
      console.log("Isosceles Right-angle triangle");
    } else {
      console.log("Isosceles triangle");
    }
  } else if (isRightTriangle(side1, side2, side3)) {
    console.log("Right-angle triangle");
  } else {
    console.log("Scalene triangle");
  }
}

function isRightTriangle(side1, side2, side3) {
  const side1Square = side1 * side1;
  const side2Square = side2 * side2;
  const side3Square = side3 * side3;

  if (
    side1Square === side2Square + side3Square ||
    side2Square === side1Square + side3Square ||
    side3Square === side1Square + side2Square
  ) {
    return true;
  }
  return false;
}
