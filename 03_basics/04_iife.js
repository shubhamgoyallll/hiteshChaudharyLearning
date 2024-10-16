// Immediately Invoked Function Expressions (IIFE)
// function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// };
// chai();  //DB CONNECTED  

//iife :: immediately invoked function expression::
// the function that call immediately
//global scope k pollution se problem hoti hai kai baar.global scope k jo variables hai
//ya declaration hai unse bachne k liye iife ka use krte hai


//named iife
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// in iife we need to explicity use ;  at the end to tell the code where to end it doesnt know... 
// ++++++++++++++++++++++++++++++++++++

(()=>{
    console.log("DB Connected2!!");
    
})()
 


// +++++++++++++++++++++++++++++
// name is the argument and "hitesh" is used as a parameter... 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

