
// function checkCharacter(input) {
   
//     var charCode = input.charCodeAt(0);  //  input to ASCII code

   
//     if (charCode >= 48 && charCode <= 57) {
//         return input + " is a number.";
//     }
  
//     else if (charCode >= 65 && charCode <= 90) {
//         return input + " is an uppercase letter.";
//     }
  
//     else if (charCode >= 97 && charCode <= 122) {
//         return input + " is a lowercase letter.";
//     }
    
//     else {
//         return input + " is not a valid character.";
//     }
// }

// console.log(checkCharacter("A")); 
// console.log(checkCharacter("z")); 
// console.log(checkCharacter("7")); 
// console.log(checkCharacter("@")); 


// //TASK TWO  

// function compareIntegers(num1, num2){
//     // Check if the two integers are equal
//     if (num1 === num2) {
//         return "The two integers are equal.";
//     }
   
//     else if (num1 > num2) {
//         return "The larger integer is: " + num1;
//     } else {
//         return "The larger integer is: " + num2;
//     }
// }


// console.log(compareIntegers(5, 10)); // Output: The larger integer is: 10
// console.log(compareIntegers(8, 3)); // Output: The larger integer is: 8
// console.log(compareIntegers(7, 7)); // Output: The two integers are equal.



// //task no 3
// function checkNumber(number) {
//     if (number > 0) {
//         return "The number is positive.";
//     } else if (number < 0) {
//         return "The number is negative.";
//     } else {
//         return "The number is zero.";
//     }
// }


// console.log(checkNumber(5)); 
// console.log(checkNumber(-8)); 
// console.log(checkNumber(0));





// //task no 04


// const correctPassword = "Secret123";

// const userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     console.log("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }



// //task no 05


// function isVowel(char) {
//     return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
// }

// // Test the function with different inputs
// console.log(isVowel('a')); // Output: true
// console.log(isVowel('B')); // Output: false



// //task no 06
// var time = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

// if (time >= 0000 && time < 1200) {
//     console.log("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     console.log("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     console.log("Good evening!");
// } else if (time >= 2100 && time <= 2359) {
//     console.log("Good night!");
// } else {
//     console.log("Invalid time input.");
// }


// //task no 07
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);



//TASK NO 08
var studentNames = [];


var studentNamesObject = new Array();

var stringsArray = ["apple", "banana", "orange"];


var numbersArray = [1, 2, 3, 4, 5];


var booleanArray = [true, false, true];


var mixedArray = ["apple", 2, true, "banana", false];
var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Educational Qualifications in Pakistan</h2>");
document.write("<ul>");
for (var i = 0; i < educationQualifications.length; i++) {
    document.write("<li>" + educationQualifications[i] + "</li>");
}
document.write("</ul>");



//TASK NO 09
//  array
var studentNames = ["Mechil", "Johin", "Tonyl"];


var scores = [320, 220, 480];

// Calculate %
var totalMarks = 500;
var percentages = [];

for (var i = 0; i < scores.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    percentages.push(percentage);
}

// Display 
for (var i = 0; i < studentNames.length; i++) {
    document.write("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage is " + percentages[i].toFixed(2) + "%<br>");
 }




//TASK NO 10

var colors = ["Red", "Green", "Blue"];


document.write("Initial array: " + colors.join(", ") + "<br>");

var BeginningColor = prompt("Enter a color to add to the beginning:");
colors.unshift(BeginningColor);

document.write("Array after adding color to the beginning: " + colors.join(", ") + "<br>");

var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);


document.write("Array after adding color to the end: " + colors.join(", ") + "<br>");

colors.unshift("Yellow", "Orange");

document.write("Array after adding two more colors to the beginning: " + colors.join(", ") + "<br>");


colors.shift();


document.write("Array after deleting the first color: " + colors.join(", ") + "<br>");

colors.pop();


document.write("Array after deleting the last color: " + colors.join(", ") + "<br>");

var indexToAdd = prompt("Enter the index to add a color:");
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);


document.write("Array after adding a color at index " + indexToAdd + ": " + colors.join(", ") + "<br>");


var indexToDelete = prompt("Enter the index to delete color(s):");
var numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
colors.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array
document.write("Array after deleting colors at index " + indexToDelete + ": " + colors.join(", "));


//TASK NO 11


var scores = [220, 230, 480, 110, 120, 230, 320, 480];

scores.sort(function(a, b) {
    return a - b;
});


document.write("Sorted scores: " + scores.join(", "));





// task no 12

var cities = ["Karachi", "Islamabad", "Quetta", "Peshawar", "Lahore"];


var selectedCities = cities.slice(2, 5); 


document.write("Selected cities list: " + selectedCities.join(", "));
