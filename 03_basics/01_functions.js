// function
// ::parameter:: jab hum function ki definition likh rhe hote h tab jo bhi aap inputs lete ho unko  parameters bolte hai 
// arguments:: jab function ko call krwate hai  tab jo bhi aap inputs lete ho unko arguments bolte hai

// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }
// sayMyName;  //this is function reference
// console.log(sayMyName); //[Function: sayMyName]

// sayMyName();    //this will call the function,it is execution of the function..
// H
// I
// T
// E
// S
// H
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
 
//  addTwoNumbers(); //NaN
//  addTwoNumbers(3,4); //7  //where 3,4 are arugement
//  addTwoNumbers(3,"4");  //34
//  addTwoNumbers(3,"a");  //3a
//  addTwoNumbers(3,null);  //3
//  addTwoNumbers(3,undefined);  //NaN

// const result = addTwoNumbers(3,5); //8
// console.log(result); //undefined


// function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result;
    // console.log("hitesh");     //return k baad kuch execute nhi hota hai
    
    // return number1 + number2
// }

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result); //Result:  8


// function loginUserMessage(username){
// //     if(!username){
// //         console.log("PLease enter a username");
// //         return
// //     }
//     return `${username} just logged in`
// }

// loginUserMessage("hitesh");  //doesnt give anything
// console.log(loginUserMessage("hitesh")) 
// console.log(loginUserMessage()) //undefined just logged in


// function loginUserMessage(username = "sam"){
//         // if(username === undefined){
//         //     console.log("PLease enter a username");
//         //     return
//         // }
//         if(!username){
//             console.log("PLease enter a username");
//             return
//         }
//         return `${username} just logged in`
//     }
//     console.log(loginUserMessage()); //PLease enter a username undefined


// +++++++++++++++++++++++++++++++++++++++++++++++++

// when we dont know how much agrument the user pass in an arguments

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(2)); //2

// when the user pass more then 1 argument and function only accept 1 parameter 
// console.log(calculateCartPrice(200,300,400)); //200

// ++++++++++++++++++++++++++++++++++++
// rest operator (...) 
// spread operator (...)
// both the operator are define by ... 
// on the basis of there usecase we can say whether it is spread operator or spread operator...

// by using rest operator ::::rest operator wrap all the multiple argument in 1 single argument and pass it to the function...

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400)); //[ 200, 300, 400 ] it return the function



// function calculateCartPrice(val1, val2, ...num1){
//     console.log("val1",val1);
//     console.log("val2",val2);
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000)) 
// val1 200
// val2 400
// [ 500, 2000 ]


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user) //Username is hitesh and price is 199

// ++++++++++++++++++++++++
// directly pass the object in the function 

// handleObject({
//     username: "sam",
//     price: 399
// })


// ++++++++++++++++++++++++++++

// pass the array in the function 

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray)); //400



// directly pass the array in the function
// console.log(returnSecondValue([200, 400, 500, 1000])); //400