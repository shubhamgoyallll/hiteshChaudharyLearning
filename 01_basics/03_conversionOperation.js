// let score = 33;
// console.log(typeof score); //number
// console.log(typeof score); //number

// +++++++++++++++++++++++++++++++

// let score = "33";
//console.log(typeof score); //string
//console.log(typeof(score)); //string

// +++++++++++++++++++++++++++++++++

// let score = "hitesh"
//console.log(typeof score); //string
//console.log(typeof(score)); //string

// ++++++++++++++++++++++++++

// let score = "33";
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); number
//console.log(valueInNumber); 33

// ++++++++++++++++++++++++++

// let score = "33abc";
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); number
// console.log(valueInNumber); NaN (not a number)

// +++++++++++++++++++++++++++

// WHEN VALUE IS NULL THEN TYPE CONVERSION TO Number

// let score = null;
// console.log(typeof score); //object
// console.log(typeof score); //object
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); // 0

// +++++++++++++++++++++++++++++++++

// WHEN VALUE IS UNDEFINED THEN TYPE CONVERSION TO Number

// let score = undefined
// console.log(typeof score); //undefined
// console.log(typeof(score)); //undefined
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); // NaN

// ++++++++++++++++++++++++++++++++++++++

// WHEN VALUE IS boolean THEN TYPE CONVERSION TO Number

// let score = true
// console.log(typeof score); //boolean
// console.log(typeof(score)); //boolean
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); // 1

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let score = "hitesh"
// console.log(typeof score); //string
// console.log(typeof(score)); //string
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); // NaN

// ++++++++++++++++++++++++++++++++++++++++++++++

// notes when we convert these to Number datatype
// "33" => 33
// "33abc" => NaN , type =>number
//  true => 1; false => 0

// +++++++++++++++++++++++++++++++++

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn); //boolean
// console.log(booleanIsLoggedIn); //true

// +++++++++++++++++++++++++++++++++++

// let isLoggedIn = 0;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn); //boolean
// console.log(booleanIsLoggedIn); //false

// +++++++++++++++++++++++++++++++++++++++

// let isLoggedIn = "hitesh"
// let booleanIsLoggedIn = Boolean(isLoggedIn) ;
// console.log(typeof booleanIsLoggedIn);//boolean
//  console.log(booleanIsLoggedIn);//true

//+++++++++++++++++++++++++++++++++++++++++

// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn) ;
// console.log(typeof booleanIsLoggedIn);//boolean
// console.log(booleanIsLoggedIn);//false

// +++++++++++++++++++++++++++++++++++++++++++++

// let isLoggedIn = undefined;
// let booleanIsLoggedIn = Boolean(isLoggedIn) ;
// console.log(typeof booleanIsLoggedIn);//boolean
// console.log(booleanIsLoggedIn);//false

// ++++++++++++++++++++++++++++++++++++++++++++++++

// let isLoggedIn = null;
// let booleanIsLoggedIn = Boolean(isLoggedIn) ;
// console.log(typeof booleanIsLoggedIn);//boolean
// console.log(booleanIsLoggedIn);//false

// ++++++++++++++++++++++++++++++++++

//conversion of these to boolean----------
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// ++++++++++++++++++++++++++++++++++++

// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber); //string
// console.log(stringNumber); // 33

// ++++++++++++++++++++++++++++++++++++++++

// let someNumber = null
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber); //string
// console.log(stringNumber); // null

// ++++++++++++++++++++++++++++++++++++++++++++

// let someNumber = undefined
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber); //string
// console.log(stringNumber); // undefined

// ++++++++++++++++++++++++++++++++++++++++++++++++

// let someNumber = true;
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber); //string
// console.log(stringNumber); // true

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// let someNumber = "33ab";
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber); //string
// console.log(stringNumber); // 33ab

// *********************** Operations ***********************

// let value = 3
// let negValue = -value
// console.log(negValue); //-3

// +++++++++++++++++++++++++++++++

// console.log(2+2); //4
// console.log(2-2); //0
// console.log(2*2); //4
// console.log(2**3); //8  2 ki power 3
// console.log(2/3); //0.66
// console.log(2%3); // 2 modulus

// ++++++++++++++++++++++++++++++++

// let str1 = "hello"
// let str2 = " hitesh"
// let str3 = str1 + str2
// console.log(str3); //hello hitesh

// ++++++++++++++++++++++++++++++++++
// problem when values append when there datatype are different

/*
note : agr phele string hai to usko string ki tarah treat kiya jaega
or agr string last mai hai to phele wale ko number i tarah treat kiya jega
*/

// console.log("1" + 2); //12
// console.log(1 + "2");  //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2");  //32
// console.log( (3 + 4) * 5 % 3); //2

// +++++++++++++++++++++++

//trick : boolean ka increament kr rhe hai to isliye 1 aaya means boolean ka conversion kr rhe hai
// console.log(+true); //1
// console.log(true+); //given a error
// console.log(+""); // 0 because empty paranthese give boolean value "false" and by adding + before it get converted to number

// ++++++++++++++++++++++++++++++++++++++++
// not a good practice

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2

// ++++++++++++++++++++++++++++++++++++

// learn prefix and postfix operator

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter); //101

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
