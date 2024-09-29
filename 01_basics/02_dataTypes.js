"use strict"; // treat all JS code as newer version

// alert( 3 + 3) 
/* this give an error while running in node compiler but not give an error on browser beacuse
all the things on browser are in document (javascript engine browser k andr chipa hua hai isliye browser p chl jaega)
*/



// original documentation of javascript
// https://tc39.es/ecma262/

// ecma script define some standards of javascript


console.log(3 
    +
     3) // code readability should be high



// +++++++++primitive datatype ++++++++++++++
console.log("Hitesh") // string datatype
let name = "hitesh"  // string datatype
let age = 18 // number datatype
let isLoggedIn = false //boolean datatype
let state; //undefined datatype
let copyN=null //null datatype  null means empty not 0..

// number => range of number is 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique (it is use for uniqueness)

// +++++++++++ non primitive datatype++++++++++
// object
// array
// function


console.log(typeof age); //number
console.log(typeof "hitesh"); //string
// we can also use typeof as:
console.log(typeof("hitesh"));  //string

console.log(typeof undefined); // undefined
console.log(typeof null); // object
