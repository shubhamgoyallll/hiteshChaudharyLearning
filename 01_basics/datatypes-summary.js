//datatype are generally have 2 category on the basis of how we save the data in memory and how we access it.
// 2 category are primitive(call by value) and non-primitive/reference type(call by reference).

//  Primitive: stack memory is used in primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

//  Reference type/Non-primitve:heap memory is used in reference type
// 3 types:Array,object,function
  
// +++++++++++++++++++++++++++++++++++

// is javascript is dynamically type language or statically type language??
/*
JavaScript is a dynamically typed language. This means that you don't 
need to explicitly declare the type of a variable when you create it,
 and the type of the variable can change at runtime.
*/

// ++++++++++++++++++++++++++++++++++++++++++

// const score = 100         //type is number
// const scoreValue = 100.3  //type is number
// const isLoggedIn = false  //type is boolean
// const outsideTemp = null  //type is null
// let userEmail;            //type is undefined 

// ++++++++++++++++++
// return type of symbol is symbol
// in symbol if we pass the same value fir bhi wo different value generate krta hai 

// const id = Symbol('123') // 
// const anotherId = Symbol('123') //
// console.log("id",id);  //Symbol(123)
// console.log("anotherId",anotherId); //Symbol(123)
// console.log(id === anotherId); //false  return value is different thats why it is false


// ++++++++++++++++++++++++++++++++++++


// for BigInt we put "n" at the end of the number to make it BigInt... 
// const bigNumber = 3456543576654356754n

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Reference (Non primitive)
// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];

// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof bigNumber);  //undefined because it is comment above...otherwise it give bigint
// console.log(typeof heros); //objects
// console.log(typeof myObj); //objects
// console.log(typeof myFunction); //function / function objects

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// typeof Operator Results


// Undefined    -->  	"undefined"
// Null	        -->     "object"
// Boolean	    -->     "boolean"
// Number	    -->     "number"
// String	    -->     "string"
// Object (native and does not implement [[Call]])	    -->     "object"
// Object (native or host and does implement [[Call]])  --> 	"function"
// Object (host and does not implement [[Call]])	    -->     Implementation-defined except may not be "undefined", "boolean", "number", or "string".

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// concept of heap and stack memory

// stack mai jo bhi rakhte ho humesha uska copy milta Hai 
// heap mai jab bhi store krte ho to original value ka reference milta hai


// let myYoutubeName = "shubham";
// let anotherName = myYoutubeName;
// anotherName = "chaiAurCode";

// String is used primitive type memory allocation thats why this happen means anothername 
// not actually store that value but store the copy of the myYoutubeName
// console.log("myYoutubeName",myYoutubeName); //shubham
// console.log("anotherName",anotherName);  //chaiAurCode


// +++++++++++++++++++++++++++++++++++++++++++


// object use the heap memory allocation and whenever we take the reference from heap it doesnt 
// not give the copy of the value, it give the reference of the original value
let userOne ={
    email:"shubham@google.com",
    upi:"user@ybl"
}

let usertwo =userOne;
usertwo.email="tanmay@google.com";
console.log("userOne",userOne); // { email: 'tanmay@google.com', upi: 'user@ybl' }
console.log("usertwo",usertwo); // { email: 'tanmay@google.com', upi: 'user@ybl' }

// both are same because both the value refer to the same reference if one value change reflects 
// in the both the object 
