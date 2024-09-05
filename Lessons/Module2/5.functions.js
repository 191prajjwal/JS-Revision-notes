function welcome(username="user"){
console.log(`Welcome ${username}!`);

}

welcome()//if you do not pass anything then user is the value of username
welcome("prajjwal")//if you pass anything then user is overwritten by passed argument


//when there is some need like when we add items on shopping cart and we have to calculate price of the shopping cart so we can calculate it using price1+price2+price3... but since we dont really know how many items are going to  be added in the card so we cant do that in this way. so we want all the arguments passed to a function even though function has no idea how many arguments it will recieve so for that we use rest operator which is also known as spread operator but when it is used as an parameter inside a function we call it as rest operator

function cartPrice(...num){
    console.log(num)//so num has now all the arguments passed to it and it stores it in array and we can loop through it to get final total price
}

cartPrice(100,198,200)
cartPrice(500,600)


function cart(num1,num2,...num){
    console.log(num1,num2,num); //so once num1 and num2 takes respective arguments whatever will come after to it will be stored in num as an array. and if nothing there after num1 argument and num2 argument then num will be an empty array.
    
}
cart(100,200,700,800,999)
cart(100,200)

//

let object1={name:"prajjwal",id:"123we"}
let arr1=[1,2,3,4]

function myFun(obj,arr){

    if(obj)
  {  if (obj.hasOwnProperty("name"))
          console.log(obj.name)
    else
          console.log('given key name is not present');
}

if(arr)
{
    console.log(arr[1]);
    
}

}

myFun(object1,arr1)


//functions in js

//1.Normal function declaration

function add(a,b){
  return (a+b)
}
console.log(add(2,5));//prints 7

//2.function expression

const fun=function(a,b){
     return (a+b)
}

console.log(fun(2,5));//prints 7

//3.Arrow function

const fun1=(a,b)=>{
    return (a+b)
}
console.log(fun1(2,5));//prints 7

//if arrow function has only one statement and which is also return then we can write it as 
const fun2=(a,b)=>a+b
console.log(fun1(2,5));//prints 7 this is called arrow function with implicit return

//or same thing we can write as

const fun3=(a,b)=>(a+b)
console.log(fun3(2,5));//prints 7

//Returning objects from arrow function

const fun4=()=>{name:"prajjwal"}
console.log(fun4())//returns undefined because this is not the correct way since {} after => will be treated as block for function

//correct way

const fun5=()=>({name:"prajjwal"})
console.log(fun5());
