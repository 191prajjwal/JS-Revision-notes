// function SetUsername(username){
//     console.log("came to set username");
//    this.username=username
// //    console.log(this)
   
// }

// function createUser(username,email,password){
//    console.log("came to set all")
//     console.log(this)
//     SetUsername(username)
//     this.email=email
//     this.password=password
    
// }

// const user= new createUser("pj191","abcd@gm.cm",12345)

// console.log("everything is set")
// console.log(user)
//here we can see in user object created using new keyword with createUser function as a constructor, email and password is there but username is not there although we used SetUsername constructor to set the username. 

//it happended due to "this" binding in createuser and setUsername is different.

//in createuser "this" is binded with newly created object created using new keyword so inside createuser 'this' is referring to the newly created object

//inside Setusername 'this' refers to global object because it is called as standalone function from createuser and it is not inside any object.

//in js if we call any regular function without any object context (means if we do not call a function inside an object) then 'this' inside the function will refer to global object.

//hence username is property of global object here and not of user.



function SetUsername(username){
    console.log("came to set username");
   this.username=username
   console.log(this)
   
}

function createUser(username,email,password){
   console.log("came to set all")
    console.log(this)
    SetUsername.call(this,username)
    //we are passing 'this' to setusername using call hence anywhere 'this' is used in setusername it will refer to object created using new keyword .
    this.email=email
    this.password=password
    
}
const user= new createUser("pj191","abcd@gm.cm",12345)

console.log("everything is set")
console.log(user)
//the first parameter in call should be a context(object that we want the called function refer if it uses any 'this' inside it.)
//if we do not pass object as first argument then mostly we will not see any error but we will get some unwanted and meaningless ,semanticless behaviour.
