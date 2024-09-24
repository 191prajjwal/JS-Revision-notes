class User{
    constructor(username){
        this.username=username
    }
    logMe()
    {
        console.log(`Username is ${this.username}`)
    }

    static secretFun(){
        console.log("I am secret and i cant be accessed outside direcly because i used static keyword")
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        //super is keyword and it goes to the Class from where we are extending our current class and access the constructor function and invoke it with respect to the context where it is called so all the values set by constructors will be set in the current context.
        //behind the seen it is working by using call method and all.
        this.email=email,
        this.password=password
    }
    addCourse(){
        console.log(`A new couse was added by ${this.username}`);
        
    }

    static courseid=123

}

const user1=new User("pj191")
console.log(user1);
user1.logMe()
// user1.secretFun()//it will give an error ssaying user1.secretFun is not a function because we used static hence this function cant be used directly.
console.log(user1 instanceof User)


console.log("\nuser 2 begins\n")

const user2= new Teacher("hiteshSir","hc@gm.cm",1234)
console.log(user2);
user2.addCourse()
user2.logMe()//it is inherriting all the properties of parent User.
// user2.secretFun()
// it will give an error ssaying user2.secretFun is not a function because we used static hence this function cant be used directly.
console.log(user2 instanceof Teacher)
console.log(user2 instanceof User)
console.log(user2.courseid)
//it gives undefined since courseid is static.



//so user2 is inherriting properties of User class hence it is instance of User class too.




//behind the scene extends and all these work like we do Object.setprototypeof(Teacher,User)

//so it is syntactical sugar like we can write it directly and in more readable way using classes


//static keyword is used before the methods or any properties inside a class to make it inaccessible by any instance of the class. these properties are accessesible by class only

console.log(Teacher.courseid)
User.secretFun()
Teacher.secretFun()

// The static keyword is used in JavaScript to define methods and properties that belong to the class itself rather than to instances of the class. These are shared across all instances and can be accessed without creating an object of the class.

// Key Reasons to Use static:
// Utility Methods: Functions that don't need to access instance-specific data. For example, Math.max() is a static method because it operates on numbers, not individual objects.

// javascript
// Copy code
// class MathUtils {
//     static add(a, b) {
//         return a + b;
//     }
// }
// console.log(MathUtils.add(5, 10));
//In short, static is useful when you need to define functionality or data that should belong to the class itself, not tied to any specific object.