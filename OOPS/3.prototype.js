//to understand this lets make a question
//suppose we have an string like this

const str1= "prajjwal    "
console.log(str1.length)//it gives 12 since whitespaces are also there

//i want a function such that it gives me length after removing the extra whitespaces for evry string we define
// suppose it like this str1.trueLength()

String.prototype.trueLength= function(){
    console.log(`${this}`);//here this refers to whoever called it
    console.log(`the true length is ${this.trim().length}`)
}

str1.trueLength()

"abcd    ".trueLength()
//so we have added one property in prototype of String hence every string can use this property.







// const wasseyPur=["faisal","sardar","ramadheer",'definite']

// const characterPower={
//     faisal: "badla",
//     sardar:"dhua dhua",
//     ramadheer:"no cinema",
//     nagma:"aese hi"
// }

// //if we want to add one property such that it is present in all arrays

// Array.prototype.dialogue= function (){
//     console.log("poora disappear kr diye hai")
// }


// wasseyPur.dialogue()

// //so we have added this dialogue function in prototype of Array so any array we declare in our program will have this function access.

// //let see whether object has access to this function or not
// // characterPower.dialogue()
// //it gave error since dialogue property is defined in Array so it is for arrays only.


// // if we create an function inside object prototype then lets see if it is available everywhere

// Object.prototype.sayHi= function (){
//     console.log("hello to everyone")
// }

// characterPower.sayHi()
// //it is working for object

// wasseyPur.sayHi()
// //it is working for array too because sayHi is not inside Array and not inside Array's prototype but it is inside its Prototypes's prototype which is prototype of Objects. hence using prototype inheritance we accessed it.
// //this sayHi function can be accessed by every  data type

// str2= "tyyy"
// str2.sayHi()
// //it is also working.

// //so conclusion is if we inject any property in object prototype then it will be accessesible to all because ultimately while prototype chaining everyone will come to Object's prototype at last.


// //prototypal inheritance 
// //one object can inherit properties of another object

// const student = {
//     username:"prajjwal",
//     age:"34"
// }

// const Teacher ={

//     subject:"maths",
//     lecture:3
    
// }

// //if we want teacher to inherit properties of student

// // way 1:

// Teacher.__proto__= student

// console.log(student)
// console.log(Teacher)
// //so now the prototype object of teacher inherit properties of student too.

// // Way:2
// const HOD={
//     department:"CSE",
//     __proto__:Teacher
// }
// console.log(HOD)
// //here HOD is inheriting  properties of Teacher and teacher is inheriting properties of Student.Hence HOD inherits properties of Teacher as well as student.

// //Way:3
// const principal={
//     college : "XYZ Engineering college"
// }

// Object.setPrototypeOf(principal,HOD)
// console.log(principal);

// //here we are setting prototype of principal by inheriting prototype of HOD.

// //so this way 3 of inherting properties is more standard now a days.












