// // const user={
// //     username:"prajjwal191",
// //     email:"191@gm.cm",
// //     age:24,
// //     Sex:"M",

// // getUsername: function(){
// //     // console.log(username)
// //     //it will give error since username is not any standalone value and we must give context that which username we are referring to 
// //     console.log(user.username);
// //     console.log(user,"\n")
// //     console.log(this)
// //     //inside any object this refers to context of  that object 
// //     console.log(this.username)
    
// // }
// // }
// // console.log(user);
// // console.log(this)
// // //here this refers to global execution context. and inside node if we write this at global scope it refers to empty object.
// // console.log(global) 
// // //global is similar to 'this' in browser console but it is only the property of node environment.
// // user.getUsername()


// // //if we want to make similar object with same properties then we have to make it manually again and again and to avoid it we use constructor functions.




//   const User=function (username,email,age,sex){

    
//     // console.log(global)
//     // console.log(this)
//     // console.log(this===global)
//     //here this refers to global object of node environment since it refers to the context it is called in and here it is called in User and hence referring User which basically has global cotext.
   


//     this.username=username
//     this.email=email
//     this.age=age
//     this.sex=sex

// greet= function(){
//     console.log(`Welcome ${this.username}`);
    
// }

//   return this
// // if we do not use new keyword to create an object from an constructor function then first of all we know this inside a function always refers to context from where function is called which will be global context in this case.

// // In this case we have to explicitely return the context here. since we are creating  objects using an this User constructor function without a new keyword.

// // hence it will create the properties in global object but it will not return it hence return this from here if you want to recieve context of the object.
    

// }


// //so what we have done is we created one function that can be reused again and again with different args to make new instances hence this is called constructor function.


// //   
// // //here we got false since user1 is not instance of User but it is referring to User context only.


// // //we can see both user1 and user2 are same as they both refer to global object and they are directly being attached to it.
// // //the user1 values are overwritten by user2 since they both are adding same properties in global object and dont have there indivisual context hence we will use new keyword to create instances or context indivisually for each user \

// const user1=  User("prajjwal","191gm.cm",24,"M")

// const user2= User("neil","123gm.cm",35,"M")

// // console.log(user1);
// // console.log(user2);
// user1.greet()







const User= function(username,email,age,sex){

    
    // console.log(global)
    console.log(this)
    // console.log(this===global)
    //here 'this' refers to a new object since we called User constructor with new keyword hence 'this' inside will refers to the context in which it is called. 

    //so using new creates new context for each user


    this.username=username
    this.email=email
    this.age=age
    this.sex=sex

    this.greet= function(){
        console.log(`Welcome ${this.username}`);
        
    }

    // return this
    //if we use new to create an object from an constructor function return is mentioned implicitely so we may or may not write it explicitely.

    

}


const user1= new User("prajjwal","191gm.cm",24,"M")

const user2= new User("neil","123gm.cm",35,"M")

console.log(user1);
console.log(user2);


user1.greet()
user2.greet()
//so both users have their own context since the constructor function is called using new hence a new instance for each object is there.
console.log(user1===user2);
//both user1 and user2 have different context and they are not referring to same object hence false.

//steps
//1.created constructor function that can recieve arg and set it inside the context it is called in
//2. when we call this constructor function using new keyword a context is created which is empty and 'this' refers to that and then values are updated or injected
//3.then 'this' context is returned to the place where it was called from using new and we need not mention return explicitely
//4. we got our new object using constructor function that's it


console.log(user1 instanceof User)//it will return true since user1 is instance of User constructor.


//the main imp thing i observed here is you should know what 'this' is referring to

//the 'this' inside a function refers to the context or we can say the object where the function is called from.



//this in console and this in vscode(node environment is different)
//in console at global level this refers to window object.
//in vscode (node environment) at global level this is empty object.also just like in console we have window object we have one global object known as "global" itself and it is refered by "global" only .

//summary
//in console global object name is window
//keyword 'this' refers to it in global scope

//in node environment global object name is global only
//keyword 'global' refers to it everywhere.
//this in node will be equal to global inside a function if that function is called from global scope.

//it might be bit confusing so  go in console and see how this behaves

//then come in vscode and see how global and this both behaves.


