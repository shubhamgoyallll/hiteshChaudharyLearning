//we can declare a object by two type :
// 1.literals
// 2.constructor

// singleton:: when we declare a object by constructor then it will create a singleton object means
// yeh apne tareke ka 1 hi object hai 

// magr jab bhi hum constructor k bina object banate hai to wo singelton nhi rehta uske multiple
// instances ban jaate hai

// jab bhi obbject ko literal ki tarah declare krte hai to singelton object nhi banta hai 

// +++++++++++++++++++++++++++++++++++






// we can create a object by 2 methods:
// 1. by constructor:
//  Object.create()   //iski ko bolte hai object create krna constructor k through jisse singelton object banta hai

// 2. object literals:
// const JsUser = {}   //isko bolte hai object create krna literal k thorugh iske multiple instances bante hai yeh singelton obejct nhi hota

// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// we can access the object by 2 methods:
// 1>. this is used only when key is single means there is no space between the key value
// console.log(JsUser.email)  //hitesh@google.com
// console.log(JsUser.full name) // error can able to access the key of obejct by . 

// 2>. this is good way to access the object because it can access the object key even when there is space between the key value
// console.log(JsUser[email]) //error :::ReferenceError: email is not defined,because keys of objects are always in string so we always declare it in "".
// console.log(JsUser["email"]) //hitesh@google.com
// console.log(JsUser["full name"]) //able to access the key even when there is space betweent the key

// ++++++++++++++++++++++++++++++++++++++++ 
// how to use access a symbol in an object 

const mySym = Symbol("key1")

//wrong way to access a symbol

// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     mySym: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.mySym); //mykey1
// console.log(typeof(JsUser.mySym)); //string //this is wrong ,we cant able to access this as a symbol this is not the right way to access a symbol
// console.log(JsUser);
//{
//     name: 'Hitesh',
//     'full name': 'Hitesh Choudhary',
//     mySym: 'mykey1',
//     age: 18,
//     location: 'Jaipur',
//     email: 'hitesh@google.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ]
//   }
//here u notice the key of symbol mySym it is like the other key of the object ,this is wrong way




//right way to access a symbol::

// to denote a symbol as an key of object we need to wrap it in []  ...

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log("shubham");
console.log(JsUser[mySym]); //mykey1   // we are access the symbol in an obejct by [] without  "",there is no change in it  value.
console.log(typeof(JsUser[mySym])); //string   there is no chnage in this type
console.log(JsUser);
// {
//     name: 'Hitesh',
//     'full name': 'Hitesh Choudhary',
//     age: 18,
//     location: 'Jaipur',
//     email: 'hitesh@google.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }

//notice the key of the symbol  [Symbol(key1)] this is different from other keys this is the right way to define a symbol and access a symbol in object

// ++++++++++++++++++++++++++++++++++++++++++++++

// to change the value of the object 
// JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser.email); //hitesh@google.com  //value is changed


// +++++++++++++++++++++++++++++++++++++++++++++++

//if we dont want to change the value of the object we use freeze in which it does show any error if we explicity change the value of object but it cant propogate the chnage value in the object

// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); //value was not change after freeze the object


// ++++++++++++++++++++++++++++++++++++++++++++++
// we can use a function as a variable in js 

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// } 
// console.log(JsUser.greeting ); //[Function (anonymous)]  // function return back means function ka refrence aya hai function call nhi hua
// // console.log(JsUser.greeting() ); //Hello JS user  //function call ho gya 

// //jab bhi same object ko reference krna hai we use__ this   __ this laga k jo bhi apna object hai uske andr jitni apni property hai wo sab apne ko yaha p mill jaegi.
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting()); //Hello JS user
//                                 // undefined


// console.log(JsUser.greetingTwo()); //Hello JS user, Hitesh
                                   // undefined