// push  are use to add the value in the existing array, infact it add a array inside array. 

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3]); //[ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]); //flash

// +++++++++++++++++++++++++++++++++++++++++++++

//concat:: Combines two or more arrays. This method returns a new array
//  without modifying any existing arrays.

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman' ]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// spread operator:::

// we can append both the array by using spread operator(...) or by concat but mostly we Use
// spread operator because there is no limitation to append the number of array but in concat we
// append only 1 array at a time

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// array.flat()::::The maximum recursion depth,Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// flat::Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//flat k andar apne ko number dene hote hai kitni depth tak mai array ko solve kru 1,2,3 depth tk
// if dont know ki kitni depth tk array krna hai to infinity likh do
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);//[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5] //we got the array with spreaded values

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

//to check the given value is array or not we use isArray Function Which give boolean values in return.
console.log(Array.isArray("Hitesh")) //false because hitesh is string


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Array.from() ::: An iterable object to convert to an array.


// to make a array from string we use__ from __function .jo bhi doge usko array mai convert krdega...

// console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]

// console.log(Array.from({name: "hitesh"})) //[]   //interesting it give blank array if it cant change it to array
//it give blank array because we have to tell the__ from function __ki kiss cheez ka array banana hai 
//keys ka values ka
 


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Array.of()

// let score1 = 100
// let score2 = 200
// let score3 = 300

// of:::: Returns a new array from a set of elements.
// if there are multiples value store in different variable and we want to create a array from those values we use of...another_array. 

// console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]