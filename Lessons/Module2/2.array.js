let marvel_Heroes=["thor","ironman","captain-america","natasha-romanoff"]
let Dc_Heroes=["Superman","Batman","wonder-woman","joker","flash"]

marvel_Heroes.push(Dc_Heroes)
console.log(marvel_Heroes);//so it basically pushed whole Dc-Heroes array inside marvel_heroes array as an element.
console.log(marvel_Heroes[4][2] ,"is Gal Gadot");


//merging two arrays using .catcat()
let marvel_Heroesagain=["thor","ironman","captain-america","natasha-romanoff"]
let Dc_Heroesagain=["Superman","Batman","wonder-woman","joker","flash"]
let allheroes=marvel_Heroesagain.concat(Dc_Heroesagain)
console.log('\n using concat method \n',allheroes);


//merging two arrays using spread operator

let marvel_Heroes_assembled=["thor","ironman","captain-america","natasha-romanoff"]
let Dc_Heroes_assembled=["Superman","Batman","wonder-woman","joker","flash"]
let all_Heroes_assembled=[...marvel_Heroes_assembled,...Dc_Heroes_assembled]
console.log('\n using spread operator \n',all_Heroes_assembled);


//flatting the nested array elements as a less nested or a single array if needed
let arr1=["level0", 1,2,3,["level1","a","b",0],["level1",true,["level2",1,2,3,["level3",1,2,3]]]]
console.log("\n",arr1.flat(2));//means flat the array deept to level 2
console.log("\n",arr1.flat(Infinity));//means flat the array deep to all levels so all elements from all array extracted and put in the array as single elements.

//some important array functions
let arr2=[1,2,3,4,"kill"]
console.log('\n',Array.isArray(arr2)); //Array.isArray(arg) returns true if arg is an array else returns false
console.log('\n',Array.isArray("okay"));


//converting iterables to array

console.log(Array.from("prajjwal"));//each character of string will be treated as an element and stored in array indices
console.log(Array.from([1,2,3,4]));

console.log(Array.from("prajjwal",(element)=>element+"2"));//Array.from(iterable,function(optional) that can take each element of iterable perform function logic and save it in array)

//converting set of elements to array
let a=5
let b=6
let c="abcd"
console.log(Array.of(a,b,c));



