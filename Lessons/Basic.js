const myId= 123
let fname="prajjwal"
var marks=12
lname=13;//here lname will be treated as property of window object so it will work but it is not a good practice so always use let or const or var to declare variables 
// console.log(myId,fname,marks,lname)
console.table([myId,fname,marks,lname])

//const is used when we are sure the data value will not be needed to change
//let is used for other variables where change is possible
//var is not good to use as it may pollute global scope
