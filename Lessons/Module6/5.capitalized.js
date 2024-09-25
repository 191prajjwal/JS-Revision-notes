class Person{
    #fName
    #lName
    #age
    #capitalize(str){

    return str.charAt(0).toUpperCase() + str.slice(1)


    }
    constructor(fName,lName,age){
        this.#fName=fName
        this.#lName=lName
        this.#age=age
    }


    set fName(newFname){
        if(typeof newFname==="string" && newFname.length>0 && newFname!==" ")
            this.#fName=newFname
        else
        console.warn("FirstName must be a non empty string with atleast one character")
    }

    set lName(newLname){
        if(typeof newLname==="string" && newLname.length>0 && newLname!==" ")
            this.#lName=newLname
        else
        console.warn("lastName must be a non empty string with atleast one character")
 
    }

    set age(newAge){
        if (typeof newAge==="number" && newAge>0)
            this.#age=newAge
        else
        console.warn("I don't know about other places but Age is Just a number here that too greater than 0")
    }

    get fName(){
        const capitalFname= this.#capitalize(this.#fName)
        return capitalFname
    }
    get lName(){
        const capitalLname= this.#capitalize(this.#lName)
        return capitalLname
    }
    get age(){
        return `${this.#age}`
    }
    get fullName(){
       const capitalFname= this.#capitalize(this.#fName)
       const capitalLname= this.#capitalize(this.#lName)
        return `${capitalFname} ${capitalLname}`
    }
}


const p1= new Person("prajjwal","shukla",24)
console.log(p1.age)
console.log(p1.fName)
console.log(p1.lName)
console.log(p1.fullName)
