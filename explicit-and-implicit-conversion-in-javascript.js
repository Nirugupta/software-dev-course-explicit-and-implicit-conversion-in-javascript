/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

/*let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
  console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge); */

// Part 1: Debugging Challenge

// The given code had an type coersion (implicit type conversion) where the string "5" was being treated as a number during subtraction, which is correct. However, to make it explicit and avoid confusion, we can use Number() to convert the string to a number before performing the operation.
let result = Number("5") - 2;
console.log("The result is: " + result);

// The given code had string "false" which is truthy in JavaScript and any non-empty string is considered true in a boolean context. Therefore, the condition will always evaluate to true. To fix this, we can use Boolean() to explicitly convert the string to a boolean value. In this case, we are checking if the string is equal to "true" to determine its boolean value.
let stringValue = "false";
let isValid = Boolean(stringValue === "true");
if (isValid) {
  console.log("This is valid!");
}

let age = "25";
// The given code had an implicit type conversion where the string "25" was being treated as a string during concatenation with the number 5, resulting in "255". To fix this, we can use Number() function to convert the string to a number before performing the addition.
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

// Part 2: Write Your Own Examples

// Example of implicit type conversion
// In this example, the string "Hello, world!" is being implicitly converted to NaN (Not a Number) when we try to multiply it by 2. This is because the multiplication operator expects numbers, and JavaScript tries to convert the string to a number, it results in NaN.
let message = "Hello, world!";
console.log("Type of message: " + typeof message);
let implicitResult = message * 2;
//The output will be NaN because NaN*2 is not a valid mathematical operation, and JavaScript cannot convert the string to a number, resulting in NaN.
//Also in the console.log statement, we are concatenating a string with the implicitResult variable, which will also result in "Implicit Result: NaN" as type coercion will convert the NaN to a string when concatenating with another string.
console.log("Implicit Result: " + implicitResult);
console.log("Type of implicitResult: " + typeof implicitResult);

// Example of explicit type conversion
// In this example, we are explicitly converting the string "10" to a number using the Number() function before performing the multiplication.
let explicitResult = Number("10") * 2;
console.log("Explicit Result: " + explicitResult);
console.log("Type of explicitResult: " + typeof explicitResult);
