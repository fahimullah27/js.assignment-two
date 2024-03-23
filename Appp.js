// // Queation no 01
// let multiArray = [];

// const numRows = 4;
// const numCols = 4;


// for (let i = 0; i < numRows; i++) {
//     multiArray[i] = [];
// }


// document.write(multiArray); 




//Qestion no 02




let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.log(matrix); 




//Qestion no 03



for (let i = 1; i <= 10; i++) {
    console.log(i);
}



//Qestion no 04



let number = parseInt(prompt("Enter the number for multiplication table:"));
let length = parseInt(prompt("Enter the length of the table:"));




console.log(`Multiplication table of ${number} up to length ${length}:`);
for (let i = 1; i <= length; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}



//Qestion no 05



let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Items of the array:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    console.log(fruits[i]);
    console.log(`Element at index 0 is ${fruits[0]}`);
console.log(`Element at index 1 is ${fruits[1]}`);
}

    //  QUESTION NO 06


    
function countingSeries() {
    let series = [];
    for (let i = 1; i <= 15; i++) {
      series.push(i);
    }
    return series.join(", ");
  }
  
  function reverseCountingSeries() {
    let series = [];
    for (let i = 10; i >= 1; i--) {
      series.push(i);
    }
    return series.join(", ");
  }
  

  function evenSeries() {
    let series = [];
    for (let i = 0; i <= 20; i += 2) {
      series.push(i);
    }
    return series.join(", ");
  }

  function oddSeries() {
    let series = [];
    for (let i = 1; i <= 19; i += 2) {
      series.push(i);
    }
    return series.join(", ");
  }
  
  function seriesWithK() {
    let series = [];
    for (let i = 2; i <= 20; i += 2) {
      series.push(i + "k");
    }
    return series.join(", ");
  }
  
  console.log("a. Counting: " + countingSeries());
  console.log("b. Reverse counting: " + reverseCountingSeries());
  console.log("c. Even: " + evenSeries());
  console.log("d. Odd: " + oddSeries());
  console.log("e. Series: " + seriesWithK());