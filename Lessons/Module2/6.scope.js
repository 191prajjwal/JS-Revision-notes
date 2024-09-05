// scope of a variable or function or any data type means all locations where  we can access that varaible ,function ,data type.
//let and const variables are block scoped so if we try accessing them outside the block they are declared in we will get reference error
//var has function scope that means if we try accessing var variable outside of a function it is declared in we will get reference error. var do not have block scope so if we declare var variable inside any block like for ,else ,if etc we can use it outside also as var do not have block scope.


if(true){
    let a=5
    const b=6
    var c=7
}

// console.log(a)//reference error a not defined since it is let variable so it has block scope
// console.log(b)//same as above
console.log(c);//it is accessible outside of block too as it do not have block scope.hence we must not use var as it may pollute our global environment



function myFun(){
    let x=5
    const y=6
    var z=7
}

// console.log(x)//reference error a not defined, since it is let variable so it has block scope which means it cant be acess beyond the culy braces it is declared in
//console.log(y)//same as above
// console.log(z)//reference error z not foundd,since z is var variable hence cant be accessed outside function it is declared too so it has function scope 


function fun(){
  let a=5
  const b=90
  var c=20

  let p=50
  const q=60
  var r=70

  function fun2(){
    let a=10
    const b=180
    var c=40

    let x=100
    const y=200
    var z=300
    console.log("logging inside fun2");
    
    console.log("a,b,c : ",a,b,c);//taking a,b,c from inside of fun2
    console.log("x,y,z : ",x,y,z);//taking taking x,y,z from inside of fun2
    console.log("p,q,r : ",p,q,r);//taking p,q,r from fun since fun is acessebile to all its children

  }
  fun2()

  console.log("\n","Logging outside of fun2 and inside fun");
  console.log("a,b,c : ",a,b,c);
//   console.log("x,y,z : ",x,y,z);//this will give error  as x,y,z are not defined outside and a outer function can't access inner function variables but inner function can access outer function variables
  console.log("p,q,r : ",p,q,r);

}

fun()





function a(){
    if(true)
    {
    let m=5
    const n=6
    var o=7
    }

    // console.log(m);//m has block scope so reference error
    // console.log(n);//same as above
    console.log(o);// o has function scope hence can be accessed anywhere in function where it is declared
   
    
    
}

a()