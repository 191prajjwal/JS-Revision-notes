//learn about singletons by your own
//singleton is easy concept where we will add some conditions in our object creation such that if the object constructor is called for first time then only create object and all the other times return the exsisting object.
//singleton object is made such that we have only one instance of an object that can be accessed all over the program ex: we can make Database a singleton object.
//objects are in form of key value and key is always unique so you cant have two or more keys with same name if you do the last key will overwrite previous one

let a="xyz"
let mySymbol=Symbol("hi")

let obj={
    name:"prajjwal",
    age:18,
    "full name":"prajjwal shukla",
    location:"rewa",
    email:"191prajjwal@gmail.com",
    isLoggedIn:false,
    loggedInDays:["monday","wednesday","friday"],
    [a]:"pqrs",//this [a] refers to value "xyz" that is outside in variable `a ` so it is like  xyz:"pqrs" so we can access it like obj[a] which internally means obj.xyz so both obj[a] and obj.xyz will give same result.
    [mySymbol]:"abcd",//this is correct way of storing already declared symbol variable inside object
    newSymbol:Symbol("opqr"),
    greeting: function(){
        console.log(`Welcome ${this.name}!`);//this refers to object that you refer
        
    }

}

console.log(obj);
console.log(obj.name);
console.log(obj["name"]);//computer stores keys in "" so name:"prajjwal" is stored as "name":"prajjwal"
console.log(obj["full name"]); //we cant do like obj.full name or obj."full name"
console.log(obj.loggedInDays[2]);
console.log(obj[a], obj.xyz);//both will give same result
console.log(obj[mySymbol], typeof obj[mySymbol]);//this is correct way of accessing  a symbol of outside which is present inside an object

console.log(obj.newSymbol, typeof obj.newSymbol);




obj.email="prajjwal333@gmail.com"//changing values of object key
console.log('\n',obj);

Object.freeze(obj)//now onwards the change will not be done in object so wahtever change you do it will not give error but changes will also not done.

obj.name="rahul"
console.log('\n',obj,'\n');



console.log(obj.greeting)
obj.greeting()



