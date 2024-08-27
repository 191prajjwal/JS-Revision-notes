let str1="string1"
let str2='string2'


let name="prajjwal191"
let age =70;
console.log(name+age)//String conacatenation
console.log("my name is " + name + " And my age is "+age) //we can do this but it is not much readable
console.log(`My name is ${name} and my age is ${age}`)//this is much readable and known as string interpolation where we can use placeholders inside backticks by using ${} this is also know as template literal

// ***functions on string***
console.log(name.indexOf("j"));
console.log(name.charAt(5));
console.log(name.length);
console.log(name.toUpperCase())
console.log(name.substring(1,4))
console.log(name.slice(2,5));
console.log(name.slice(-7,5));
console.log(name.includes("191"))
console.log(name.includes("19"))
console.log(name.includes("193"))






// *****Another ways to Declare string******

let str3= String("Hello World")
console.log(str3);
console.log(typeof str3);//it says it is of type String


let str4= new String("Hello World")
console.log(str4)
console.log(typeof str4)//it says it is of type object
//in console if we see str4 it will be like this that means it is an object
// String {'Hello'}
// 0:"H" 1: "e"2: "l"3: "l"4: "o"
// length: 5
// [[Prototype]]: String[[PrimitiveValue]]: "Hello"
str4[2]="p"//it will not change str4[2] to p because in JavaScript no matter how you create string it is always immutable
console.log(str4[2]);
console.log(str4);

// ++++More Functions on String++++


let str5="      alright      "
console.log(str5);
console.log(str5.trim());//removes the extra whitespaces

let str6="   I am      pj         "
console.log(str6);
console.log(str6.trim());//only removes whitespaces at start and end and not in b/w

//There are more trim methods such as .trimEnd()  .trimStart() 



let url="https://Prajjwal191%20Shukla/About"
// if i want to replace %20 with - then we can use replace method
let newUrl=url.replace("%20","-")
console.log(url);//this is unchanged
console.log(newUrl);//only this is changed



// ++++Converting string to array+++++++
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//refer MDN doc for more info

let str8="prajjwal-191- shukla"
console.log(str8.split("-"));//split string items separated by - and store in array and return arrray
console.log(str8.split(""));//split each string characters and store them in array and return
let converted=str8.split('-')
console.log(converted[1]);//accessing item from array

let str9="I am don and my age is 69"
console.log(str9.split(" ",4));//split the string based on space and split and store item in array untill array length is not more than 4

let str10="there are lots of fishes in pond"
let index=7
console.log(`the character at index ${index} is ${str10.at(index)}`)//.at method returns character at index








