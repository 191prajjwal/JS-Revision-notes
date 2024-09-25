//when classes were not introduced in js this was the way to use getters and setters


// implementing getters and setters  in constructor function

function User(email,password){
    this._email=email;
    this._password=password

    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase()
        },

        set: function(value){
            this._email=value
            
        }
    })

    Object.defineProperty(this,"password",{
        get: function(){
            return this._password
        },

        set: function(value){
            this._password=value
            
        }
    })
}


const user1= new User("hello@re.ai",123456)

console.log(user1)
user1.email='h1@gm.cm'
user1.password='1qw23e'
console.log(user1)
console.log(user1.email)
console.log(user1.password)



//using get set ddirectly in object

const Rectangle ={
    width:100,
    height:18,

    set width(value){

        this._width=value

    },
     
    get width(){
        return this._width
    },

    set height(value){

        this._height=value

    },
     
    get height(){
        return this._height
    }


}

const square = Object.create(Rectangle)
console.log(square)
square.width=100
square.height=100
console.log(square)
console.log(square.width)
console.log(square.height)
