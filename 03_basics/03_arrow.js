// this :::: it is used to refer the current context.

const { log } = require("winston");

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);  
//     }
// }


// user.welcomeMessage;            // give the reference of the function 
// user.welcomeMessage(); // hitesh , welcome to website
// {
//     username: 'hitesh',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }
// user.username = "sam"
// user.welcomeMessage(); //sam , welcome to website
// {
//     username: 'sam',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

// console.log(this); //{} because we are in node environment and this refer to the blank object {},because there is no context in the global thats why it is blank....
// but when we console.log(this) on browser it give window object because browser k andar jo global object hai wo window object hai.. 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// function chai(){
// console.log(this);
// }

// chai(); //it gives many values ..


// +++++++++++++++++++++++++++++++++++++++++


// function chai(){
//     let username = "hitesh"
//     console.log(this.username); 
// }

chai() //undefined
//so here we conclude that __ this __ give the blank object {} only in object not in function..so this not work in function


//  ++++++++++++++++++++++++++++++++++++++++++++++

// another way to define the function assigned it to variable.. 

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// console.log(chai); //[Function: chai]
// chai(); //undefined

// +++++++++++++++++++++++++++++++++++++++++++
// another way to define  a function and the below function declaration is called arrow function.
//only the difference is remove the function keyword.


// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);
//     console.log(this)
// }

// console.log(chai); //[Function: chai]
// chai() //undefined  
       // {} 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4)); //7


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// implicity return function where we dont require { } and dont use return and the function is single line

// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3,4));   //7

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// agar {} bracket mai function likha to return keyword likhna hai or agr () mai likhna hai to return keyword likhne ki jaroorat nhi hai 

// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3,4)); //7

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// if we dont use () and we want to return the object {username: "hitesh"} 

// const addTwo = (num1, num2) => {username: "hitesh"}
// console.log(addTwo(3, 4)) //undefined  //because we dont return the object like the above method ,to return an object we need to wrap it between ()


const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4)) //{ username: 'hitesh' }


function outer() {
       let val = 10;
       return function inner() {
              console.log(val);
              
       }
}

const closer = outer();
closer();