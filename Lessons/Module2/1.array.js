let arr1=[1,2,3,4,"okay"]
let arr2= new Array(2,4,6,8,9,"well")
console.log(arr1,typeof arr1,'\n',arr2, typeof arr2);

//array copy is shallow copy that means if we copy an array to another array like let arr2=arr1 then both of them points to same array data so change in any one makes changes in original array data. most non primitive data types follow shallow copying only as they are stored in heap memory.

arr1.push(5)
console.log(arr1);

let a=arr2.pop()
console.log(a);
console.log(arr2);

//push and pop are used to insert or delete at end

arr1.unshift("insert1")
console.log(arr1);

let b=arr2.shift()
console.log(b);
console.log(arr2);

//unshift and shift both works similar to push and pop but they perform operations at start hence they are quite expensive operations but if we need to perform such operations then we have to use it (we may optimize it later)



console.log(arr1.includes(4));
console.log(arr1.includes(67));
console.log(arr1.includes("okay"));

console.log(arr2.indexOf("well"))
console.log(arr2.indexOf("9"))//string 9 is not there so returned -1
console.log(arr2.indexOf(9))
console.log(arr2.indexOf(95))


console.log('\n',"arr1 ",arr1)
let slicedarr=arr1.slice(2,5)
console.log("after slicing arr1 ", arr1);
console.log("slicedarr ", slicedarr);
//slice method do not change original array generally 


console.log('\n',"arr2 ",arr2)
let splicedarr=arr2.splice(2,3)
console.log("after splicing arr2 ",arr2);
console.log("splicedarr ",splicedarr);
//splice method changes original array too.


let stringarr=arr1.join()//converts array in string
console.log('\n',arr1,typeof arr1);
console.log(stringarr,typeof stringarr);













