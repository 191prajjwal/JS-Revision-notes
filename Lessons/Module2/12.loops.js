//For of loop: it says give me one iterable like array or string or map and one name for its element(value) and i will run your logic for every element of your iterable automatically

let arr=[1,2,3,4,5,"abcd"]
for(const element of arr)
{
    // console.log(element)
}//here you may think why everytime assignment in element is possible even if const is used before element : this is because for of loop creates a new block for each element of err and hence they are declared with const in each block and get the value.

let myString= "Prajjwal shukla"
for(const char of myString){
    // console.log(char);
    
}


//For of in map

let map = new Map()
map.set(1,'a')
map.set(2,'b')
map.set(3,'c')
map.set(4,'b')
map.set(5,'f')
// console.log(map)
map.set(3,'x')//updated key 3 to x
// console.table(map)//gives more readable way in console

for(const entry of map)
{
    // console.log(entry);
    
}
//so maps are iterables and each iteration give one key value pair
//if we want only keys or only values we can destructure them as well in an array but we can not directly destructure them in an object because then we cant directly iterate it we have to use object.keys,object.values,object.enteries in it and all

for(const {key,value} of map)
{
//    console.log(key)
//    console.log(value)
    //    console.log(`key is ${key} and value is ${value}`);

    
}

// we cant directly iterate objects using for of because objects are not iterable


const myobj1={
    game1:"NFS",
    game2:"GTA",
    gwme3:"contra"
}


// for(const entry of myobj1){
//     // console.log(entry)//myobj1 is not iterable this error will come because we cant iterate objects using for of directly
// }







//////+ FOR IN LOOP++///////////////////////

//for of takes values of the array as first argument  whereas for in takes enumerables key or index and it is used to give keys or indexes 

const obj1={
    cpp:"c++",
    rb:"ruby",
    py:"python",
    java:"java",
    js:"javascript"
}


for (const key in obj1){
    // console.log(key)
    // console.log(obj1[key]+'\n')
}

//so for in works fine with objects and can iterate in it based on keys

const arr2=[1,2,3,4,5,6]
for(const indx in arr2)
{
//     console.log(indx)//so first argument in for in is key of object or index of array
//     console.log(arr2[indx]+'\n')
// 
}


const map1= new Map()
map1.set(1,'a')
map1.set(2,'b')
map1.set(3,'c')
map1.set(4,'d')
map1.set(5,'e')
// console.log(map1)

for (const [key,value] in map1){
    console.log(key,value);
    
}

// for in dont iterate through maps because map have no enumerable properties like keys or index so it dont give any output for map because it cant find any enumerable in it.  keys in maps are not stored like keys in plain objects thats why they are not considered enumerables

//so for arrays and maps we mostly use for of//it gives values in case of array and a whole key:value in case of map//it dont work directly for objects
//for objects we use for in/it gives enumerables like index in array and key in objects//it dont work for maps.



////////////////fOR each loop

//for each loop takes one callback function as argument that callback function may take upto three argument element, index,array in case of array and  value,key,map in case of map and value,value,set in case of set
//we genrally use for each in case of array,sets
//so basically we perform this function over each item of the following data structure.


const arr3=[1,2,3,4,5,6]

arr3.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
    // console.log(item+5)
    // arr[index]=2 //this will go and change our original array since it got our array in it as argument and passing array means we can refer to original location.
})

// console.log(arr3) //it may affect our original array if  we use passed array in callback and do some manipulations


const map2= new Map()
map2.set(1,'a')
map2.set(2,'b')
map2.set(9,'c')

function print(item,key,map)
{
    // console.log(item,key,map)
}

map2.forEach(print)



const set = new Set([1, 2, 3, 4,3]);
set.add(5);
set.forEach((value1,value2,set) => console.log(value1,value2,set));

//forEach takes callback function as an argument hence forEach is higher order looping function