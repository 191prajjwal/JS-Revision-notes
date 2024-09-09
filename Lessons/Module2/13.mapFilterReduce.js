const arr=[1,2,3,4,4.5,5,6,7]
//suppose we want all numbers of array greater than 4

// 1. using forEach

let arrValues=arr.forEach((item)=>{
    if (item >4)
        return item
})
console.log(arrValues);
//but since we know forEach cant return anything so this will not work
//so we can take one external varaible and update it usinfg for loop for each value of array greater than 4
arrValues=[]
arr.forEach((item)=>{
    if(item>4)
    {
      arrValues.push(item)
    }
})

console.log(arrValues)//it gives array

////////We have some inbuilt methods in java for filtering things////
//////FILTER 

arrValues=arr.filter((item)=>{
    return item>4
})
console.log(arrValues)// so it gives all items in arr that are greater than 4
//filter takes a callback function as an argument and that callback takes a variable as argument that referes to the item of array one by one. the callback functions iterates through each item of array and returns the item for which the condition you specified is true


// The filter method is very much used to query on api data or DB data based on some particular conditions
//the api data or DB data comes genrally in array of objects format

const novels = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { title: "1984", author: "George Orwell", genre: "Dystopian" },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Jazz Age" },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction" }
  ];

  //find all the objects whose genre is fantasy

  let novelsData=novels.filter((item)=> item.genre==="Fantasy")
  console.log(novelsData)
  //so item refers to each object of novels array and if any item has genre Fantasy it will be returned.
  //so similarly we can use any condition or many constions using and ,or  to filter out things 


  ////////////////////////////Map///////////////////////

//   map method will take a callback function which will take one argument which refers to item of array and this function will take each item one by one perform given logic in it and return the value of that logic for each item of array.
//Map will always return same length array as original array


const arr1=[1,3,5,7,9,11,13,15,17,19]
//if we have one array with all items as odd number and we want to make an array out of it with all items even

// let arr1Data=arr1.map((item)=> item+1)
// console.log(arr1Data)// so it takes each item one by one and adds 1 to it and push that item in arr1Data.

//now if we want to multiply by 2 in same array we can again apply map on it or we can do chaining of map also if we want to filter all items greater than 16 we can use filter on it.

let arr1Data= arr1.map((item)=> item+1).map((item)=>item*2).filter((item)=>item>16)
console.log(arr1Data);// so we channed maps so firsly first map will take items one by 1 and do +1 to each item and create one temp array with all items increased by one and pass it to second map once first map is done then 2nd map will take it and do *2 and push it in another temp array them filter will take each item and check condition and return the items in arr1Data which follow conditions.





/////////////////////////////////Reduce////////////////////////////

//Reduce is used to compress array based on some logic of callback function and returns the single compressed value
//ex: summation of all vallues in an array.


let arr2=[1,2,3,4,5]

let arr2Sum=arr2.reduce((acc,currVal)=>{
  return acc+currVal
})

console.log(arr2Sum)
//the reduce function takes generally two arguments first is callback function and second is initial value. the callback function recieves two arguments first one is accumulator variable and second one is current value.  the accumulator is initialized with initial value if given else if initial value is not given(it is optional) it will take first value of the array as initial value and then starts executing callback from 2nd element of array.

let arr2Mul= arr2.reduce((acc,currVal)=>{return acc*currVal})
console.log(arr2Mul);

//we can pass the desired initial value for the accumulator 
const initial=10
let arr2Sums= arr2.reduce((acc,currVal)=>{return acc+currVal},initial)
console.log(arr2Sums);


const myCart = [
  { item: "Apple", quantity: 2, price: 75 },
  { item: "Banana", quantity: 3, price: 50 },
  { item: "Orange", quantity: 1, price: 100 },
  { item: "Milk", quantity: 1, price: 250 },
  { item: "Bread", quantity: 2, price: 125 }
]

const finalPrice= myCart.reduce((acc,curObj)=>acc+curObj.price,0)
console.log(finalPrice);

//when we have the items as objects or something we have to explicitely mention initial value of accumulator
//also it is good to give to initial value always to make it more readable.
//Read MDN for reduce it is explained very beautifully.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#parameters





