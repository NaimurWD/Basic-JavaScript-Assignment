// "use strict";
{
  // Ques 01
  // Create a variable called carName, assign the value Volvo to it.
  //Solve: Note {} used for multiple same variable name.

  let carName = "Volvo";
}

{
  // Ques 02
  /*On one single line, declare three variables with the following names and values:

firstName = "John"
lastName = "Doe"
age = 35

So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
3rd Variable Name And Values Both! 
*/
  //Solve

  let firstName = "John"; // write variable name
  let lastName = "Doe"; //write variable values
  let age = 35; // write variable name and values both
}

{
  // Ques 03
  /*Use the correct assignment operator that will 
result in x being 50 (same as x = x * y). 
*/
  //Solve

  x = 10;
  y = 5;
  x = x * y; // what will be the value of x ?
  console.log(x); //x returns value of 50. Checked in console.
}

{
  // Ques 04
  //Use comments to describe the correct data type of the following variables:

  //Solve

  let length = 16; //Number
  let lastName = "Johnson"; //string
  const x = {
    firstName: "John",
    lastName: "Doe",
  }; // object
}

{
  // Ques 05
  //Execute the function named myFunction.

  function myFunction() {
    alert("Hello World!");
  }
  myFunction(); // called the function and see the output
}

{
  // Ques 06
  /*1. Create an object called person with name = John, age = 50, Then,
   access the object to alert("John is 50").*/
  const person = {
    name: "John",
    age: 50,
  };
  alert(`${person.name} is ${person.age}`); //wait for second alert
}

{
  // Ques 07
  //1. The <button> element should do something when someone clicks on it. Try to fix it!
  /********/
  //solved in index.html file
}

{
  // Ques 08

  //1. Alert the number of items in an array, using the correct Array property:

  const cars = ["Volvo", "Jeep", "Mercedes"];

  alert(cars.length);

  /*
2. Change the first item of Brand to "Ford".
*/
  const Brand = ["Volvo", "Jeep", "Mercedes"];

  Brand[0] = "Ford";
  console.log(Brand);
}

{
  // Ques 09
  //1. Use the correct Math method to create a random number.

  let randomNumber = Math.random();
  console.log(randomNumber);

  //2. Use the correct Math method to return the largest number of 10 and 20.

  let largestNumber = Math.max(10, 20);
  console.log(largestNumber); // Output: 20

  //3. Use the correct Math method to get the square root of 9.

  let squareRoot = Math.sqrt(9);
  console.log(squareRoot); // Output: 3
}

{
  // Ques 10
  //1. Choose the correct comparison operator to alert true, when x is greater than y.
  x = 10;
  y = 5;

  alert(x > y); // ?

  //2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

  let age = 17; // Example age, you can change this value to test

  alert(age < 18 ? "Too young" : "Old enough");
}
