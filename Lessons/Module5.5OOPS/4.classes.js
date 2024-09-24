// class User{

//     constructor(username,email,password){
//         this.username=username,
//         this.password=this.password,
//         this.email=email
//     }

//     encryptPassword(){
//         return `1q2w333$$${this.password}*&%%$^`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const user1=new User("pj191","191@gm.cm","12qw34")

// console.log(user1)
// console.log(user1.encryptPassword())
// console.log(user1.changeUsername())


//the class and all is just syntactical sugar but behind the seen it works like this:-

function User(username,email,password){

    this.username=username,
    this.email=email,
    this.password=password
}

User.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}

User.prototype.encryptPassword= function(){
    return `1q2w333$$${this.password}*&%%$^`
}

const user1=new User("skdu24",'sk@gm.cm','1q2w34r5')

console.log(user1)
console.log(user1.changeUsername())
console.log(user1.encryptPassword())
