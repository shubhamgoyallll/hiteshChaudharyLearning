// console.log(2 > 1); //true
// console.log(2 >= 1); //true
// console.log(2 < 1); //false
// console.log(2 == 1); //false
// console.log(2 != 1); //true


// ++++++++++++++++++++++++++++++++++++
// problem occured when we not compare the values of same datatype
// rule never compare the values of different datatype not a good practice......

// console.log("2" > 1); //true
// console.log("02" > 1); //true

// ++++++++++++++++++++++++++++++++++++++

/*
note: the reason is that an equality check == and comparison >, < ,>=,<= work differently
comparison convert the null to a number and treating it as 0 and thats why below given 3 line 
null >= 0 is true and the line1 null>0 is false 
*/

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true 

// ++++++++++++++++++++++++++++++++++++++++++
/*
note:
give the same issue but the 1 thing is that when we compare undefined with any operator it 
always give false value 
*/


// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false

// +++++++++++++++++++++++++


/*
===  it is called strict check(it not only check value but also the datatype of values)
*/


// console.log("2" === 2); //false  beacuse the datatype is different but value same