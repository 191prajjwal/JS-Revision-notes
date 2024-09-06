// Immidiately invoked Function Expression

//executing function immidiately after its declaration.
//when we want our global variables not to be polluted we can use it


//normal function
function myfun(){
    console.log("Function executed");
}

myfun();//before running an IIFE if another function or IIFE there then put ; on it otherwise the previous function cant stop
//the function myfun has global scope. so anyone can access this function

//IIFE

(function fun(){
    console.log("IIFE Executed");
    
})();
//cover function in(fn) and run it like this (fn)() is IIFE
//this was named IIFe
//IIFE has block scope.

(function(){
    console.log("IIFE executed again");
    
}());
//this is unnamed IIFE

(function(name){
    console.log(`Hello! ${name} IIFE executed once again`)
    
    
})("prajjwal");//passing arguments while calling

(()=>{
    console.log("arrow function using IIFE");
    
})();


//normal functions have global scope if we declare it outside 
//IIFe has block scope since we define it inside () 
//can only be invoked as soon as declared 
//IIFE are strict for scoping than normal functions and help us for encapsulation and mitigate global scope pollution.