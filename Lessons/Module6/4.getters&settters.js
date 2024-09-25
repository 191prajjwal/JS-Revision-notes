// class Rectangle{
//     constructor(width,height){

//         this.width=width,
//         this.height=height
//     }
// }

// const rect1= new Rectangle(5,10)
// console.log(rect1)

// const rect2= new Rectangle("abcd",-100000)
// console.log(rect2)

// //so we can see if we directly set user's passed argument inside our constructor variable then they since user may pass any arugument like anything that may be irrelevant or not correct data like here width= "abcd" do not make any sense hence we can do some extra logic or validation while setting the values

// //this can be done using setter methods


// class Rectangle{
//     constructor(width,height){
//         this.width=width
//         this.height=height
//     }

// set width(value){
//     if(value>0)
//     this._width=value
// //it will only take values >0 and hence all irrelevant things like strings and all will not be allowed
// //we created separate property _width that we intended to use privately inside here only because if we use width directly then both constructor and setter will be in race to set the width and race condition occurs which keep calling constructor and setter one after another and call stack will be overflowed and we will get error max call stack size exceeded.
// //so by convention we use _width and all hich says _width is prvate for the setter.
// else
// {
//     console.log("Error: width must a positive number greater than 0")
// }
// }


// set height(value){
//     if(value>0)
//     this._height=value
// else
// {
//     console.log("Error: Height must a positive number greater than 0")
// }
// }

// get width(){
//     return this._width
// }
// //if we created setter to set the value then we can only acess the value using getter

// get height(){
//     return this._height
// }
    

// }


// const rect1= new Rectangle("trrrr",20)
// //it will give error

// const rect2= new Rectangle(120,30)
// console.log(rect2.width,rect2.height)
// //here we got right 
// //one small problem here is that if we use _width or _height outside then also we can access it which is not a good thing becuase then again someone can come and change the property to whatever he she wants

// console.log(rect2)
// rect2._width="abcd"
// console.log(rect2.width)

// //we can see here now we accessed _width and skipped the validation and directly entered the irrelevant data again.

// //but generally no body do that so it is not that big issue.

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName,
//         this.lastName=lastName

//     }


//     set firstName(value){
//         if(typeof value === "string" && value.length>0 && value!==" ")
//         {
//             this._firstName=value
//         }
//         else{
//             console.log("firstname must be a valid string with atleast one character other than space")
//         }
//     }

//     set lastName(value){
//         if(typeof value === "string" && value.length>0 && value!==" ")
//         {
//             this._lastName=value
//         }
//         else{
//             console.log("lastname must be a valid string with atleast one character other than space")
//         }

       
//     }

    
//     get firstName(){
//         return this._firstName
//     }

//     get lastName(){
//         return this._lastName
//     }

//     get fullName(){
//         return ` the full name is "${this._firstName.toUpperCase()} ${this._lastName.toUpperCase()}"`
//     }
//     //we created get full name eventhough there is no property fullname for this class
//     //so we can create any getter function we want also we may create getter without setter too.
//     //we may use getter and to give a more readable response and in desired form like here we use touppercase to give final response.


//     set fullName(value){

//         const nameArray = value.split(" ")
//         console.log(nameArray)
//         this._firstName=nameArray[0]
//         this._lastName=nameArray[1]

//     }
// }

// const person1= new Person(" "," ")
// //it will give error and say firstname must be a valid string with atleast one character other than space
// // lastname must be a valid string with atleast one character other than space
// console.log(person1)
// //since both  firstname and last name are not set hence we will get empty object

// const person2= new Person("Toru","Watanbe")
// console.log(person2)

// person2.lastName="Naoko"
// console.log(person2)

// //so we can acess it like that.

// console.log(person2.fullName)
// //we got fullName

// //we can set FullName too

// person2.fullName="haruki murakami"
// console.log(person2)

// console.log(person2.fullName)



// //Solving problem that  _firstname and all can be accessed outside so how to stop it 

// using # to  create truly private properties

class Rectangle {
    #width
    #height
    constructor(width,height){
        this.#width=width
        this.#height=height
    }


    set width(value){

        if(value>0)
        this.#width=value
       else
       console.log("width must be a number greater than 0 ")
    }

    set height(value){

        if(value>0)
        this.#height=value       
    else
       console.log("height must be a number greater than 0 ")
    }

    get width(){
        return this.#width
    }
    get height(){
        return this.#height
    }
    get area(){
       return `the area of the rectangle is ${this.width * this.#height}`
    }
}

const rect= new Rectangle(10,15)
console.log(rect)
console.log(rect.width,rect.height)

//we can see that if we print rect then we cant see any field inside it this is because #width and #height both are private properties of the class and it cant be accessed outside of the class
rect.width=14
rect.height=10
console.log(rect.width,rect.height)
console.log(rect.area)

rect.width="ab"
// width must be a number greater than 0 
console.log(rect.width)

// console.log(rect.#width)
// SyntaxError: Private field '#width' must be declared in an enclosing class
//we got this error because we cant use any field with # outside a class.
//so we saved our private fields from being accessed outside.
