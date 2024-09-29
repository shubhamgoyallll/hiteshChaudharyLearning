// const name = "hitesh"
// const repoCount = 50
// console.log(name + repoCount + " Value"); //hitesh50 Value

//   +++++++++++++++++++++++++++

// string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Hello my name is hitesh and my repo count is 50

// +++++++++++++++++++++++++++++++++++

//another way to define the string
const gameName = new String('hitesh-hc-com')

//string is object not an array.

//to access a string key
console.log(gameName[0]); //h

//to access the proto from the string object 
console.log(gameName.__proto__); //{}  shows value of proto on the browser only ...

// below method not change the original value of string because string store value in stack
// it return a new value 

console.log(gameName.length);  //13
console.log(gameName.toUpperCase()); //HITESH-HC-COM
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0, 4)
console.log(newString); //hite

//substring not take -ve value it automatically convert it to positive value consider it as positive value
const newString1 = gameName.substring(-8, 4)
console.log(newString1); //hite

// but slice take the -ve value and treated it as reverse string 
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);  //      hitesh    
console.log(newStringOne.trim()); //hitesh

const url = "https://hitesh.com/hitesh%20choudhary"  
console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-choudhary
console.log(url.includes('hitesh')) //true
console.log(url.includes('sundar')) //false

//convert the string to array based on -
console.log(gameName.split('-')); //[ 'hitesh', 'hc', 'com' ]