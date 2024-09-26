//we can have shallow copy and deep copy of an array

// /* Shallow COPY */
//refer MDN for more info
// https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

// //A shallow copy creates a new array with a copy of the elements from the original array.
// // If the elements in the array are primitive values (like numbers, strings, booleans), they are copied by value, so changes in these primitive values in copied array do not affect the original array.
// // If the elements in the array are non-primitive values (like objects or arrays), the reference to these non-primitive values is copied. This means both the original and copied arrays share the same reference to these non-primitive elements.
// // As a result, changes to the non-primitive data in either array (original or copied) will affect both arrays, because they are pointing to the same objects in memory.

// const arr=[1,2,3,[4,5],{name:"prajjwal",age:"85"}]

// const arr1=[...arr]

// console.log("arr : ",arr)
// console.log("arr1 : ",arr1)

// arr1[2]=33
// console.log("\n")
// console.log("arr : ",arr)
// console.log("arr1 : ",arr1)
// //we can see that it did not affect our original array since we changed the primitive data. this is because we do not have reference to primitive data type of original array in new array.
// //similarly if we change any primitive data in original array it will not affect new array since both have independent primitive data type references


// arr1[3][0]= 99
// console.log("\n")
// console.log("arr : ",arr)
// console.log("arr1 : ",arr1)
// //now we can see changing non primitive data type value inside new array changes the  value inside original array too. because when new array was made out of original array using spread operator then a shallow copy it is made that means the reference of non primitive type inside original array is also copied inside new array hence change in non primitive type value in anyone will change the original array value as well as new array value since both points to same reference.

// arr[4].name="pj191"
// console.log("\n")
// console.log("arr : ",arr)
// console.log("arr1 : ",arr1)
// //it changes the name to "pj191" in both this is the example for shallow copy.

//Array.from() and ...spread will make a shallow copy of an array.


// /* Deep copy*/

// // A deep copy creates a completely independent copy of an array and all its nested objects, so changes to one array do not affect the other.



// //way 1 to create a deep copy
// //using JSON.stringify to serialize the array first into json string so all its reference and all gone not again convert string to array using JSON.parse() so now this array will  have no reference of nested non primitive types to original array reference.
const arr=[1,2,3,[4,5],{name:"prajjwal",age:"85"}]
// const arr1= JSON.parse(JSON.stringify(arr))
// console.log("arr : ",arr)
// console.log("arr1 : ",arr1)

// arr1[1]=999
// console.log("\n")
// console.log("arr : ",arr)
// console.log("arr1 : ",arr1)
// //it do not do any change because first of all we are changing non primitive type here and we know it has no reference to original array also it is deep copy.

// arr1[4].age=108
// console.log("\n")
// console.log("arr : ",arr)
// console.log("arr1 : ",arr1)
// //the age is changed only in arr1 not in arr because it is deep copy so both array have different reference to their non primitive objects

// arr[3]="hello"
// console.log("\n")
// console.log("arr : ",arr)
// console.log("arr1 : ",arr1)
// //the change is only limited to the original array due and not in arr1 since it is a deep copy.


// Way-2 of creating deep copies

//using structuredClone() web api

const arr2=structuredClone(arr)
console.log("arr : ",arr)
console.log("arr2 : ",arr2)
arr2[4].age=108
console.log("\n")
console.log("arr : ",arr)
console.log("arr2 : ",arr2)
//so it also works same way



//if we serialize data using JSON.stringify and then then deserialize them using JSON.parse() then all the references held by our data will be lost.

//structuredClone() will also fail to create deep copies of non serializable data like JSON.stringify() and all

//so if we want to make deep copies of function with closures and we used serialization and all the lexical scope remembered by inner functions will be lost hence we cant create deep copies of them.











