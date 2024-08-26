//based on how data is stored and accessed there are two types of data types

//Primitive data types
//when we acess variabble having primitive data type we acess its value and not reference
//when we update a variable having primitive data type a new copy of it is genrated and the variable now equals to this copied value and original value is intact and now uncontrolled and memory leak happens which is handled by garbage collector

let num1=1
let num2=2.5
let num3=122222222222222223445
let num4=122222222222222223445n
let str="yes boss"
let string='ok boss'
let a= undefined;
let b;
let c=null;
let d=true;
const mySymbol=Symbol("hi")
const yourSymbol=Symbol("hi")
console.log(mySymbol===yourSymbol)//it will return false as both time symbol returns unique value even though  you pass same argument


console.table([num1,num2,num3,num4,str,string,a,b,c,d,mySymbol])
console.table([typeof(num1),typeof(num2),typeof(num3),typeof(num4),typeof(str),typeof(string),typeof(a),typeof(b),typeof(c),typeof(d),typeof mySymbol]);




//Non primitive data types
//refering to non primitive data type means referring the location where they are stored
//so on updating non primitive data types we go to location and update the value at original place itself

//************Array************/
let arr=[1,2,3]
console.log(arr)
let arr1=[[1,2,3],[4,5,'a'],[true,false,null,undefined,Symbol('yes')]]
console.log(arr1)
console.table(arr1)
console.log(arr1[2])
console.log(arr1[2][3])

//******Object ******/

let obj1={
    fname:"yes",
    lname:"no",
    age:24,
    skills:["HTML","CSS","JS","React","NODEJS","EXpress"]
}

console.log(obj1)
console.log(obj1.skills[2])

//*********Function***************/
function fun1(a){
    console.log(a)
}
fun1(1)

const fun2=function(a){
console.log(a)
}

const fun4=function add(a,b){
    console.log(a+b)
}


fun2("fun2")

const fun3= (a)=>{
    console.log(a)
}
fun3("fun3")
fun4(4,3)


console.log(typeof arr);//type of array is object(isnt irt surprising)
console.log(typeof obj1);//type of object is object
console.log(typeof fun1);//type of function is function


