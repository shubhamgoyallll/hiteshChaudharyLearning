// const score = 400
// console.log(score); //400

// // explicity define the value to a Number
// const balance = new Number(100) 
// console.log(balance); //[Number: 100]

// console.log(balance.toString()) //100
// console.log(typeof balance.toString()) //string

// console.log(balance.toString().length);  //3
// console.log(balance.toFixed(2)); //100.00
// console.log(balance.toFixed(1)); //100.0

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); //123.9  it return a string 

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); //1,000,000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++
//math library come with javascript bydefault


// console.log(Math); //Object [Math] {} 
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.round(4.5)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4, 3, 6, 8)); //3
// console.log(Math.max(4, 3, 6, 8)); //8
// console.log(Math.random()); //0.3   generate random number between 0 and 1
// console.log((Math.random()*10) + 1); //7.3 add +1 because we dont want 0 value to be considered
// console.log(Math.floor(Math.random()*10) + 1); //8



// trick to generate a number between a Range
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //15