const arr=[1,,3,45,6]
console.log(arr.hasOwnProperty(2))//true since it has some element at index 2
console.log(arr.hasOwnProperty(1))
//false since it has no element at index 1

// this is happening because if we go in browser console  and create one array like const arr = [1,2,3,4] and if we do arr[8]=9 and expand it we can see 

// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 8: 9

//so array's index is its properties and the index are only present if some element is there

//use these resources to know more about array optimization in js like packed smi holey smi and all

// https://stackoverflow.com/questions/54481918/how-does-v8-optimise-the-creation-of-very-large-arrays

// https://youtu.be/m9cTaYI95Zc?si=N2D349aSxk9tUH6n
