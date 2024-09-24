// //javascript has prototypal behaviour that means if any object , function or anything cant find a data or function or  object or anything in it that we are trying to access then it will try finding it in parents ,grandparents so on untill it either finds it or it encounter null
// //this is called prototypical inheritance


// function multiplyBy5(num){
// return num*5
// }

// multiplyBy5.anything="i can use function as an object too"
// //using function as an object and inserting a new key value in it
// //functions in js are ultimately an object only.

// console.log(typeof multiplyBy5)
// //it will say function
// console.log(multiplyBy5(3))
// console.log(multiplyBy5.anything);
// //it is being used as an object
// console.log(multiplyBy5.prototype)
// //the prototype of function is empty object here.
// //we can add some properties , methods in that empty object


// // basically in js everything is object or its prototype will ultimately refer to an object.


function createItem(item,price){

this.item=item,
this.price=price  
}

console.log(createItem.prototype)
//currently prototype of createItem is empty but this empty prototypeobject has another prototype object which has not prototype object further

//now if we go and add printPrice function in it
createItem.prototype.printPrice= function(){
    console.log(`the price is ${this.price}`)
}
//so now in prototype of createItem function printPrice is declared and defined

let item1= new createItem("chai",60)
//using new keyword we got new context for item1
console.log(item1)
console.log(createItem.prototype)
//we can see its prototype printPrice is defined
console.log(item1.__proto__)
//to know prototype of objects do like that
//we can see item1 has no such property like printPrice but since it is instance of object created by createItem constructor hence it inherits prototype properties of createItem.

console.log(Object.getPrototypeOf(item1))
//this is more standard way of knowing prototype of any object or data.

item1.printPrice()

//since item1 has no printPrice in it so it will go to its prototype which is prototype of its constructor too and get printPrice from there.


//using new will do these things
//when we use 'new' in front of any constructor function then one object is created. the created object is empty initiallly and then assigned with passed arguments properties,and it is linked to prototype of the constructor function. so this object has  access of all properties present inside constructor function. now this newly created object is returned.







 


