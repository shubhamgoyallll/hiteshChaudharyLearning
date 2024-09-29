// we can declare the object by :

// 1.
// const tinderUser = new Object()
// console.log(tinderUser); //{}  //no difference only the difference is it is singelton object

//2.
const tinderUser = {}
// console.log(tinderUser); //{}   //no difference only the difference is it is non singelton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser); 
//{
//     email: 'some@gmail.com',
//     fullname: { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
//   }
// console.log(regularUser.fullname); //{ userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
// console.log(regularUser.fullname.userfullname); //{ firstname: 'hitesh', lastname: 'choudhary' }
// console.log(regularUser.fullname.userfullname.firstname); //hitesh

// ++++++++++++++++++++++++++++++++++++++++

// to combine the objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = { obj1, obj2 }
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// +++++++++++++++++++++++++++++++++++++++++

//object.assign():::Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

// const obj3 = Object.assign(obj1, obj2)  
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// but the better to do it assign it to  blank{} to guaranted combine all the object and result will be {}
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// ++++++++++++++++++++++++++++++++++++++++++

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// // Expected output: true 

//so first param is target and other are source so all the source is combine to the target thats why returnedTarget === target 
// so good practice is to assigned the target value to blank object { }  .

// +++++++++++++++++++++++++++++++++++++++++++++

// spread operator

// const obj3 = {...obj1, ...obj2}
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// ++++++++++++++++++++++++++++++++++++++++++++++++

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// console.log(users[1].email); //h@gmail.com
// console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

// ++++++++++++++++++++++++++++++
// to find the array of keys of an object we use 
// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]  //datatype:array


// ++++++++++++++++++++++++++++++
// to find the array of values of an object we use 

// console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]

// ++++++++++++++++++++++++++++++
// Object.entries()
// Returns an array of key/values of the enumerable properties of an object

// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// +++++++++++++++++++++++++++++++++++
// Object.hasOwnProperty() ::Determines whether an object has a property with the specified name.,return booleans values 

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
// console.log(tinderUser.hasOwnProperty('isLogged')); //false //not exist this property in object

// ++++++++++++++++++++++++++++++++++++++++
// destructuring


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// name of the key and variable is same 
// const {courseInstructor} = course
// console.log(courseInstructor); //hitesh
 

// want to change the name of the key and variable different 

// const {courseInstructor:instructor} = course
// console.log(courseInstructor); //given an error now
// console.log(instructor); //hitesh

// +++++++++++++++++++++++++++++++++++++
//json : javascript object notation

// {
    // "name": "hitesh",
    // "coursename": "js in hindi",
    // "price": "free"
// }


