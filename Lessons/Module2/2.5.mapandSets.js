//maps are kind of a object in js that stores unique keys and values just like objects but there are some basic differences 
//we cant iterate through objects directly but we can iterate through maps
//we dont have order of inseretion rememberd in objects but we do in map
//we have some predefined keys implicitely in objects because of its prototype but in map we dont have any implicit keys and it has only the keys that you explicitely enter.
//there is good explanation of map in MDN docs so revisit once again in link below:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map






let map= new Map()
map.set("Name","Prajjwal")
map.set(123,24)//a key in map can be any data type 
map.set([2],"male")
map.set("isLoggedIn","yes babe")
map.set({"class":60},45)
console.log(map.get(123))//.get is used to retrieve the data
console.log(map)

map.set([2],"female")
console.log(map)
console.log(map.get({"class":60}))//it prints undefined because map will think this {"class":60} as new instance and hence its propert is not srictly equal to it so it  will give undefined.


// to use it do

const myobj= {"class":70}
map.set(myobj,98)
console.log(map)
console.log(map.get(myobj))

console.log(map.delete("isLoggedI"));//deleted and return true if found and deleted else return false 
console.log(map);//now key and value is deleted.

//learn more about it in mdn

//see 12.loops.js for see how for loops work in it



// const set = new Set([1, 2, 3, 4]);

// set.add(5);
// console.log(set.has(3)); 
// set.delete(2);
// console.log(set.size); // 4

// set.clear();
// console.log(set.size); // 0


const set = new Set([1,2,3,4,5,5,6,7,,,8])
console.log(set)

set.add(78)
console.log(set)

set.delete(4)
console.log(set)

console.log(set.size)

set.clear()
console.log(set)
console.log(set.size)