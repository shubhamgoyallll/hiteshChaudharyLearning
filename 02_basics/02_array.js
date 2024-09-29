// push  are use to add the value in the existing array, infact it add a array inside array. 

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3]); //[ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]); //flash

//concat:: Combines two or more arrays. This method returns a new array
//  without modifying any existing arrays.

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman' ]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// we can append both the array by using spread operator(...) or by concat but mostly we Use
// spread operator because there is no limitation to append the number of array but in concat we
// append only 1 array at a time

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// flat::Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));