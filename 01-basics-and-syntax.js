// JavaScript Basics - Coming from python
// This file covers the fundamental syntax differences

console.log("=== VARIABLES AND DATA TYPES ===");

// Variable declarations (unlike python's simple assignment)
var oldWay = "avoid var"; // funcion-scooped, can be redeclared which is bad since you can do that by mistake;
let modernWat = "use let"; // block-scoped, cannot be redeclared
const constant = "use const for constants"; // block-scoped, cannot be reassigned 

// python: name = "Jhon"
// JavaScript: let name = "Jhon";

let name = "Ihab";
let age = "18";
let isStudent = true;

console.log("Name:", name, "Age:", age, "Student:", isStudent)

console.log("=== STRINGS ===");

// String interpolation (like Python f-strings)
// Python : f"Hello {name}, you are {age} years old"
// JavaScript: template literals with backticks

let greeting = `Hello ${name}, you are ${age} years old`;
console.log(greeting);

// Strings methods (similar to python)
let text = "JavaScript Programming";
console.log("Length:", text.length); // Python: len(text)
console.log("UpperCase: ", text.toUpperCase()); // Python: text.upper()
console.log("LowerCase:", text.toLowerCase()); // Python: text.lower()
console.log("Split :", text.split(" ")); // Python: text.split(" ")

console.log("=== ARRAYS (like Python lists) ===");

// Arays are like Python lists but with different methods 
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];

console.log("Fruits:", fruits);
console.log("First Fruit", fruits[0]) // Same as Python
console.log("Last Fruit", fruits[fruits.length - 1]) // Python : fruits[-1]

// Adding elements
fruits.push("grape"); // Python : fruits.append("grape")
console.log("After Push", fruits);

// Removing elements
let removed = fruits.pop(); // same as python
console.log("Removed:", removed, "Remaining:", fruits);

console.log("=== OBJECTS (like python dicts) ===");

// Objects are like Python dictionaries but with different syntax
 let person = {
  name: "Ihab",
  age: "18",
  city: ["Rabat", "Ifrane"],
  hobbies: ["Programming", "Volleyball", "Golf"]
};

console.log("Peson:", person);
console.log("Name:", person.name); // or person["name"]
console.log("Age:", person["age"]); // bracket notation like in python

// Adding new properties
person.occupation = "Software Engineer";
console.log("=== CONDITIONAL STATEMENTS ===");

// similar to python but different syntax 
let score = 85;

if (score >= 95) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
