<!-- In programming, particularly when working with objects and arrays, shallow copy and deep copy are terms that describe the way data is copied from one object or array to another. These concepts are especially important in languages like JavaScript, where objects and arrays are reference types.

1. Shallow Copy:
A shallow copy creates a new object or array, but it only copies the top-level properties or elements of the original object. If the original object or array contains nested objects or arrays, the shallow copy will still point to the same inner objects (i.e., references to the inner objects are copied, not the objects themselves). This means changes to the nested objects in the copy will affect the original object as well, and vice versa.

Example:
javascript
Copy code
let originalArray = [1, 2, [3, 4]];
let shallowCopy = [...originalArray];  // Shallow copy using spread operator

shallowCopy[0] = 10;  // Modify the first element of the copy
shallowCopy[2][0] = 99;  // Modify the nested array in the copy

console.log(originalArray);  // Output: [1, 2, [99, 4]]
console.log(shallowCopy);    // Output: [10, 2, [99, 4]]
Effect: Modifying the nested array (shallowCopy[2][0] = 99) in the shallow copy also modifies the nested array in the original array (originalArray[2][0]), since both are referencing the same nested array.
Common Methods for Shallow Copy:
Array: slice(), concat(), spread operator (...)
Object: Object.assign() or the spread operator ({...obj})
2. Deep Copy:
A deep copy creates a new object or array and recursively copies all nested objects or arrays. This means that the copy is entirely independent of the original, and changes to the nested objects in the copy do not affect the original object, and vice versa.

Example:
javascript
Copy code
let originalArray = [1, 2, [3, 4]];
let deepCopy = JSON.parse(JSON.stringify(originalArray));  // Deep copy using JSON methods

deepCopy[0] = 10;  // Modify the first element of the copy
deepCopy[2][0] = 99;  // Modify the nested array in the copy

console.log(originalArray);  // Output: [1, 2, [3, 4]]
console.log(deepCopy);       // Output: [10, 2, [99, 4]]
Effect: The original array remains unchanged (originalArray[2][0] is still 3), because the deep copy creates a completely independent copy of both the outer and nested arrays.
Common Methods for Deep Copy:
Manual deep copy: Write a recursive function that iterates over all properties and nested objects/arrays.
JSON methods: JSON.parse(JSON.stringify(obj)) (works only with objects that can be serialized into JSON; does not handle functions, undefined, or circular references).
Limitations of JSON-based deep copy:
Cannot copy functions:
javascript
Copy code
let obj = { func: () => console.log("hello") };
let copy = JSON.parse(JSON.stringify(obj));
console.log(copy.func);  // Output: undefined
Cannot handle undefined values.
Cannot handle circular references.
Comparison:
Feature	Shallow Copy	Deep Copy
Depth of copy	Only the top-level elements or properties are copied. Nested objects/arrays are shared.	Recursively copies all nested objects/arrays, creating a completely independent copy.
Efficiency	Faster, since it only copies references of nested objects.	Slower, as it must recursively copy all objects.
Change impact	Changes to nested objects in the copy affect the original.	Changes to nested objects in the copy do not affect the original.
Common Methods	slice(), concat(), Object.assign(), spread operator (...)	JSON.parse(JSON.stringify(obj)), custom recursive functions
Limitations	Cannot copy deeply nested objects/arrays independently.	May not work with non-serializable data like functions, undefined, or circular references.
Use Cases:
Shallow Copy:
Useful when you only need to clone the top-level object and are fine with nested objects being shared.
Efficient for performance.
Deep Copy:
Essential when you need to make a fully independent copy of an object with nested objects.
Important when the object has complex structures or when changes to the copy should not affect the original.
Example of Shallow vs Deep Copy in Code:
javascript
Copy code
// Shallow copy
let obj1 = { a: 1, b: { c: 2 } };
let shallowCopyObj = { ...obj1 };  // shallow copy
shallowCopyObj.b.c = 3;
console.log(obj1.b.c);  // Output: 3 (original object is affected)

// Deep copy
let obj2 = { a: 1, b: { c: 2 } };
let deepCopyObj = JSON.parse(JSON.stringify(obj2));  // deep copy
deepCopyObj.b.c = 3;
console.log(obj2.b.c);  // Output: 2 (original object is not affected)
In summary, shallow copy is faster but retains references to nested objects, while deep copy creates a fully independent clone, useful when working with complex objects. -->
