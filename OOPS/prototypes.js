//javascript has prototypal behaviour that means if any object , function or anything cant find a data or function or  object or anything then in it then it will try finding it in parents ,grandparents so on untill it either finds it or it encounter null
//this is called prototypical inheritance


function multiplyBy5(num){
return num*5
}

multiplyBy5.anything="i can use function as an object too"
//using function as an object and inserting a new key value in it

console.log(typeof multiplyBy5)
//it will say function
console.log(multiplyBy5(3))
console.log(multiplyBy5.anything);
//it is being used as an object
console.log(multiplyBy5.prototype)
//the prototype of function is empty here


//so basically in js everything is object or its prototype will ultimately refer to an object.





