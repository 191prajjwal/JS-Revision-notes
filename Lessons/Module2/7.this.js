
    console.log(this)
    console.log(global)
    console.log(this===global);
    //node js is run time environment that basically focuses on server side so it has one global object name as 'global' which is like window object in browser console but window object in console focuses on client or frontend like dom and all but global in node js focuses on server.
    //the top level this that means, this in global scope inside Node Js is am empty object
    //but inside a function or anything it refers to global object of node js named as "global."

function one(){
    console.log(this)
    console.log(global)
    console.log(this===global);//here this refers to global object only but this time it prints some of the global objet 
}
one()

function  two(){
    let username="prajjwal"
    console.log(this===global)
    console.log(this.username)//here username is not the property of this(this means global which is an object in node if this is not in top level)
    //so defining a variable will not attach it to global object automatically
}
two()

function three()
{
    let username="prajjwal"
    console.log(this===global)
    this.username=username//or we can say global.username=username in node // we attached our username to this which refers to global object inside node here.
    console.log(global.username)//or we can say global.username in node and it will print "prajjwal"
    
}
three()

let four= ()=>{
    console.log(this);//arrow functions takes "this" from its lexical environment and in this case it lexical environment will refer to top level 'this' which is empty
    // hence we can see this!==global  here
    console.log(this===global)
    //but in normal functions as soon as they are invoked a this keyword is attached to it which refers to global object if function is declared globally and if it is inside an object this refers to object where that function is
    
}

four()

 function five(){
    
    console.log(this===global)//true because not top level this so it refers to global
    let p=()=>{
        console.log(this===global)//true because it do not have this but this inside it is taken from parent which refers to global
    
}
p()

}
five()





//so this behaves diffferently in browser console and in NOde js environment
//in node js 'global' refers to global object of nodejs
//in browser console this refers to global object of our js code
//the top level this not equals to global object in node js
// the inner level this refers to global object in node js


// +++++++++++++++++++CHATGPT RESEARCH LEARNING++++++++++++++++++=


//  how this behaves differently in the global context and inside a function in Node.js, as well as the distinction between the global objects in Node.js (global) and the browser (window). Here's a more detailed breakdown and clarification of your comments:

// Key Points on this in Node.js:
// Top-level this in Node.js:

// In Node.js, at the top level (outside of any function), this is not equal to global. Instead, it's an empty object ({}).
// This is because Node.js modules are wrapped in a function (a design choice to isolate module scope), so the top-level this refers to the module's exports, which starts as {}.
// Example:
// javascript
// Copy code
// console.log(this);       // {}
// console.log(global);     // [Node.js global object]
// console.log(this === global);  // false
// Inside a function in Node.js:

// When you define a function and call it in the global scope (non-strict mode), this inside the function refers to the global object.
// This behavior aligns with how JavaScript treats regular function calls: this defaults to the global object if the function is called without a context.
// Example:
// javascript
// Copy code
// function one() {
//   console.log(this);       // global
//   console.log(global);     // global
//   console.log(this === global);  // true
// }
// one();
// Differences in the Browser vs Node.js:

// In a browser, the global object is window, and at the top level, this refers to window. Thus, this === window would be true at the top level.
// In Node.js, however, the global object is global, and at the top level, this is an empty object ({}), not global. But inside functions, this refers to global.
// Summarized Comparison:
// Environment	Top-level this	Inside a function this	Global Object
// Browser	window	window (in non-strict mode)	window
// Node.js	{} (empty object)	global	global
// Important Clarifications:
// Top-level this in Node.js: Unlike the browser, where this refers to the global object (window), in Node.js, this at the top level is scoped to the module (an empty object). This prevents accidental pollution of the global scope and encourages modularity.

// Inside functions in Node.js: When you call a regular function, this defaults to global in non-strict mode. However, in strict mode, this would be undefined inside functions unless explicitly set.

// Conclusion:
// In Node.js:
// The top-level this is not the global object; it's an empty object.
// Inside functions, this refers to the global object (global) in non-strict mode.
// In browsers:
// The global object is window, and this at the top level refers to window.
// Your explanation and comments are on point but could be clarified slightly by emphasizing that top-level this in Node.js is an empty object, and in browsers, it refers to window.






// Correct: You correctly mentioned that in Node.js, the top-level this is an empty object ({}) and not equal to the global object. This happens because Node.js wraps modules in a function, and this refers to the module's exports.
// Inside a function in Node.js:

// Correct: You pointed out that inside a function, this refers to the global object (global) in Node.js, which is accurate for non-strict mode.
// Global object in Node.js vs Browser:

// Correct: You noted the distinction between global in Node.js (server-side) and window in the browser (client-side), and how they focus on different tasks (server vs. frontend DOM and user interface). This is a clear distinction.
// this in browser vs Node.js:

// Correct: You mentioned that this behaves differently in the browser, where it refers to the global object (window) at the top level, and in Node.js, it does not. This is spot on.



// +++++++++++++ARROW VS NORMAL FUNCTIONS IN NODE JS++++++++++++

// 1. Normal Functions (function) in JavaScript:
// Dynamic this binding: When a regular function is called, JavaScript creates a this context for it based on how the function is called.
// If the function is called in the global scope (i.e., myFunction()), this refers to the global object (global in Node.js, window in browsers) in non-strict mode.
// If the function is called as a method of an object (e.g., obj.myFunction()), this refers to the object that called it.
// In strict mode, this would be undefined if the function is called without an object.
// javascript
// Copy code
// function normalFunc() {
//   console.log(this);
// }

// normalFunc();  // In Node.js, `this` refers to `global`
// In the above example, normalFunc() is called without a context, so in non-strict mode, this refers to global in Node.js.
// 2. Arrow Functions (=>) in JavaScript:
// Lexical this: Arrow functions do not have their own this. Instead, they capture the this value from the lexical scope in which the arrow function is defined.
// No new this is created when the arrow function is called.
// If you reference this inside the arrow function, it will refer to this from the surrounding context (the outer scope).
// This is known as lexical scoping.
// javascript
// Copy code
// const arrowFunc = () => {
//   console.log(this);
// };

// arrowFunc();  // In Node.js, `this` refers to the lexical scope (`{}` at the top level)
// In the example above, arrowFunc captures the this from the top-level scope. Since at the top level in Node.js, this is {}, the arrow function’s this will also be {}.
// Key Differences Summarized:
// Aspect	Regular Function (function)	Arrow Function (=>)
// this behavior	Created dynamically when the function is called	Does not create its own this
// Binding of this	Depends on how the function is invoked	Inherits this from the lexical scope
// Global this in Node.js	Refers to global in non-strict mode	Refers to the outer this (e.g., {} at top level)
// Strict mode	this becomes undefined if called in global scope	No new this; keeps the outer this
// Example in Node.js:
// javascript
// Copy code
// // Top-level `this` in Node.js is an empty object (`{}`)
// console.log(this);  // {}

// // Regular function
// function regularFunc() {
//   console.log(this);  // Refers to `global` in Node.js (non-strict mode)
// }

// regularFunc();  // Prints `global`

// // Arrow function
// const arrowFunc = () => {
//   console.log(this);  // Refers to top-level `this`, which is `{}` in Node.js
// };

// arrowFunc();  // Prints `{}`
// To summarize your point:
// When a regular function is called, a this context is dynamically created for it, and in the global scope (non-strict mode), this refers to the global object (global in Node.js, window in browsers).
// In an arrow function, this is not created, and if this is used inside the arrow function, it refers to the lexical this (the this value from the outer scope where the arrow function was defined).