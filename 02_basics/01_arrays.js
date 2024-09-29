// array can have similar or different type of elements.
// array is collection of multiple items in a single variable
// in js array are resizable 
// js arrays are not associative array and so array elements cannot be accessed  using arbitrary strings as indexes..
//js array copy operation always create a shallow copies.
//shallow copy :::of an object is a copy whose properties share the same reference point..
//deep copy :: of an object is a copy whose properties do not share the same reference point..

// ++++++++++++++++++++++++++++++++++++

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); //1
// console.log(myArr2); //[ 1, 2, 3, 4 ]

// +++++++++++++++++++++++++++++++++++++
// Array methods

// myArr.push(6);
// console.log(myArr); // [ 0, 1, 2, 3,4, 5, 6]
// myArr.push(7)
// console.log(myArr);  // [0, 1, 2, 3,4, 5, 6, 7]
// myArr.pop(); // in pop function we dont pass any parameter
// console.log(myArr); //[0, 1, 2, 3,4, 5, 6]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//note::: to use unshift function in array have high complexity because we add the value to the
// starting of the array by which the remaining Elements index will shift which is very complexity

// myArr.unshift(0); //add the value to the first index of the array
// console.log(myArr); //[0, 0, 1, 2,3, 4, 5]
// myArr.unshift(9); //add the value to the first index of the array
// console.log(myArr); //[9,0, 0, 1, 2,3, 4, 5]


// myArr.shift() // shift function remove the first element from the first index of the array
// in shift function we dont pass any parameter
// console.log(myArr); //[ 1, 2, 3, 4, 5 ] remove 0 from the first index


//  +++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(myArr.includes(9)); // false ,this function return boolean check whether the value exist in array or not..
// console.log(myArr.indexOf(9)); //-1 because this value is not exist in the array

//note :::: if the value is not exist in an array and we use index function on that value
// it give -1 in return

// console.log(myArr.indexOf(3)); //3 this is use to find the index of the given value in an array

//  ++++++++++++++++++++++++++++++++++++++++++++++++++

//join()::::adds all the elemets of an array into a string separated by specific operator.. 
// const newArr = myArr.join() 
// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(typeof myArr); //object

// console.log( newArr); // 0,1,2,3,4,5
// console.log(typeof newArr); //string

// +++++++++++++++++++++++++++++++++++++++++++++++++

// slice, splice

//slice :: return a copy of section of an array And in Slice the last number is not included in slice
// and it does not manupulate the original array 

//splice :: the last index is included.and it manupulate the original array
console.log("A ", myArr); //[ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) //not include the last index

console.log(myn1); //[ 1, 2 ] 
console.log("B ", myArr); //[ 0, 1, 2, 3, 4, 5 ] //slice not manuppulate the original array


const myn2 = myArr.splice(1, 3)  //last index includes
console.log("C ", myArr); //[ 0, 4, 5 ] // give the remaining values of the array
console.log(myn2); //[ 1, 2, 3 ]  // also manupulate the original array.
