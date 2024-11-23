import fetch from "node-fetch";
// const fetch = require("node-fetch");
// const promiseOne = new Promise((resolve, reject) => {
//   let error = true;
//   if (!error) {
//     setTimeout(() => {
//       console.log("shubham");
//       let value = "shubham";
//       resolve({ value });
//     }, 1000);
//   } else {
//     reject("something went wrong!!");
//   }
// });

// promiseOne.then(() => {
//   console.log("in then part");
// });

// promiseOne
//   .then((data) => {
//     console.log("this is execute when the code is execute without error");
//     console.log(data);
//     return data;
//   })
//   .then((data2) => {
//     console.log("data2", data2);
//   })
//   .catch((err) => {
//     console.log("this code is execute whebn the error comes", err);
//   })
//   .finally(() => {
//     console.log("this piece of code is always runs");
//   });
// new Promise((resolve, reject) => {
//   let error = true;
//   if (!error) {
//     setTimeout(() => {
//       console.log("shubham");
//       let value = "shubham";
//       resolve({ value });
//     }, 1000);
//   } else {
//     reject("something went wrong!!");
//   }
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("this always print"));

// promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       console.log("shubham");
//       let value = "shubham";
//       resolve({ value });
//     } else {
//       reject("something went wrong!!");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log("something went wrong!!", error);
//   }
// }

// consumePromiseFive();

// async function getallUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("errror", error);
//   }
// }

// getallUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    console.log("data", data);
    return data.json();
  })
  .then((dataJson) => {
    console.log("dataJson", dataJson);
  })
  .catch((error) => {
    console.log("error", error);
  })
  .finally(() => {
    console.log("this code is always execute");
  });
