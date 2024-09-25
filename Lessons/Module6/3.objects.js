//wE Know value of Math.pi =3.14.....
//but can we change it to some other value in our program so that next time onwards if i use Math.PI it give me the value i assigned to it while changing


console.log(Math.PI)
Math.PI=4
console.log(Math.PI)

//we can see both the times before changing and after changing it is still 4
//so that means we can't change the value of Math.PI 
//this happens because every object has some additional properties that we can't see in its prototype directly but if we open constructor of the protype of an object we can see.

//one imp property is getOwnPropertyDescriptor which takes two arg first is object and second is its property and it will give some description about the property of that object.

const obj={
    name:'prajjwal',
    age:24,
     subject:"Maths",
    printMe: function(){
        console.log(`my name is ${name} and my age is ${age} `);
        
    }
}

console.log(obj)
console.log(obj.name)
const nameDescriptor=Object.getOwnPropertyDescriptor(obj,'name')
console.log(nameDescriptor)
//so we can see we can see one object in console having some description about name property over there like value,writable, enumerable,configurable etc
//if writable is false 

for (let keyy in obj)
{
    console.log(keyy,":",obj[keyy]);
  
    
}

console.log(Object.keys(obj))
//we are able to see the properties (or keys) inside for loop because these keys are enumerable.
//like if i go and change the keys property such that enumerable =false then that property will not be seen


Object.defineProperty(obj,'name',{enumerable:false})
console.log("\n After setting enumerable false in name")
for(let prop in obj)
{
    console.log(prop,":",obj[prop])
    
}
//so now we can see that We set enumerable false in name hence now we cant see name property 

// so if some property is enumerable we can see it but if it is false we cant see it if we use for in loop or do Object.keys() and all


console.log(Object.keys(obj))
console.log(Object.entries(obj))
console.log(Object.values(obj))

// so now we cant see the name property since we do enumerable=false
//
//however we can still acess the name too
console.log(obj.name)

obj.name="prajjwal191"
console.log(obj.name)

// we can overwrite in it too but if we do not want name to be owerwritten we can do

// Object.freeze(obj)
// obj.name="prajjwal1918888"
// console.log(obj.name)

// //but then we cant set any property and we can write  it so if we want only name to be not writable we can do this

//sometimes we do not want to print someproperties like if i do not want to print function property then we can either set its enumerable property as false or we can do

for(let prop in obj)
{
    if(typeof obj[prop]!=='function')
    {
        console.log(prop, ":", obj[prop])
    }
}
//so now function is not shown

Object.defineProperty(obj,'name',{writable:false})

obj.name="prajjwal1999999900091"
console.log(obj.name)


// //hence now no one can write anything in it untill and unless writable is false



// //lets see descriptors of Math.PI

// const piDescriptor= Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(piDescriptor)

// //we can see writable is false in it hence we can't write it

// //lets try changing it writable property to true


// Object.defineProperty(Math,"PI",{writable:true})
// //it gave error saying Cannot redefine property: PI  this is because this is inbuild Object of JS and we cant just go and change its property.

// //we cant change the properties of inbuilt objects like Math and all using Object.defineProperty()


// //that's why Math.PI is always 3.14....



//so the main purpose of this lecture is to learn how we can get description of any property of an object by using Object.getOwnPropertyDescriptor() and how to define(change) these properties using Object.defineProperty()
