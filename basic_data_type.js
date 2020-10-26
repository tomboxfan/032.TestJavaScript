// https://github.com/Bunlong/The-Modern-JavaScript-Tutorial/blob/master/pages/2.5-Data-types.md

// A variable can at one moment be a string and later receive a numeric value
// This is called “dynamically typed”, meaning that there are data types, but variables are not bound to any of them.
// no error
let message = "hello";
message = 123456;



// str ----------------------------------------------------
// In JavaScript, there are 3 types of quotes.
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Double and single quotes are the same.
let str = "Hello";
let str2 = 'Single quotes are ok too';

// Backticks: “extended functionality” quotes. 
let phrase = `can embed ${str}`;
