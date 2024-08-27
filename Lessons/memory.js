//There are Generally two Types of Memory to store DataTypes

// ********************STACk**************
// When we store primitive data types they are stored in Stack. 
// on assigning one primitive data type variable(a) to another primitive data type variable(b) we assign copy or we can say value of the b to a and not reference hence now if we change b, a do not get changed this can be understood with given example below

let a="str1"
let b="str2"
console.log(a,b)
b=a
console.log(a,b)
b="str3"
console.log(a,b)

//so on assigning a to b and changing b afterwads do not update a because b has value of a not the reference of a


// **************HEAP*******************
//When we store non-primitive data types they are stored in HEAp
//on assigning one non-primitive data type variable (a) to another non primitive data type (b)  both a and b will now point to same reference hence on updating any thing in any of a or b will update original values at the reference. this can be understood using example below

let x={
    name:"prajjwal",
    age:75,
    sex:"male"
}

let y={
    name:"neil",
    age:125,
    sex:"?"
}

console.log(x,y);

y=x
console.log(x,y);
y.name="raj"

console.log(x,y);

//so  on assigning a to b then changing b will change a also because both a and b points to same reference if we assign a to b