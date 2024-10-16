// global scope: define outside the block,global scope mai jo bhi likhenge wo block scope mai available hoti hai
// block scope : define inside the block,magr block scope ki value bhar accessible nhi honi chaiye


// {} this curly braces is called scope... 

// if (true) {
//     let a = 10 //block scope the value define inside the block cant not access outside the block
//     const b = 20
//     var c=30    
// }
// console.log(a); // error :::: a is not defined 
// console.log(b);  //error ::: b is not defined
// console.log(c);  //30


// ++++++++++++++++++++++++++++++++
// var c=300;   
// if (true) {
//     var c=30    
// }
// console.log(c);  //30
// ++++++++++++++++++++++++++++++++++
// var c=300;
// if (true) {
//     c=30    
// }
// console.log(c);  //30

// ++++++++++++++++++++++++++++++++++++
// let a =300;
// console.log("a1",a); //a1 300
// var c=300;
// console.log("c1",c); //c1 300

// if (true) {
//    let a=10
//     c=30    
//     console.log("a2",a); //a2 10
//     console.log("c2",c); //c2 30
    
// }
// console.log("a3",a);  //a3 300
// console.log("c3",c);  //30 its value changes outside the block

// +++++++++++++++++++++++++++
// nested scope 

// closure:::child function can access the variable of parent function 


// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);  it give an error

//      two()

// }

// one()
 

// ++++++++++++++++++++++++++++++++


// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         console.log(username + website); //hitesh youtube
//     }
//     // console.log(website); //give an error
// }

// console.log(username); //  username is not defined


// // ++++++++++++++++++ interesting ++++++++++++++++++
//both the function are declare with 2 different method,1st is define direct function ,2nd is define a function and assigned its value to a variable

// function addone(num){
//     return num + 1
// }

// addone(5) //return hua hai print nhi krwaya

// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// } 
// addTwo(5) ////return hua hai print nhi krwaya

// +++++++++++++++++++++++++++++++++++++++++
//  jab hum function se phele bhi call krdenge to koi error nhi dega 


console.log(addone(5));  
function addone(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2
} 


console.log(addTwo(5))