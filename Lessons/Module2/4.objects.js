const obj1= new Object({name:"prajjwal",age:24})
console.log(obj1);
obj1.name="raj"
obj1.class=12
console.log(obj1);
//object created using Object constructor


//objects inside objects

const bumbleUser={
    name:"prajjwal",
    age:24,
    sex:"male",
    orientation:"straight",
    dateType:{casual:{isFunLoving:true,isTraveloholic:true,isHighOnWeed:false,favAuthor:"Murakami"},serious:{favAuthor:"Beverly Jenkins",favPlace:"prague"}}
}
console.log(bumbleUser);
console.log(bumbleUser.name);
console.log(bumbleUser.dateType);
console.log(bumbleUser.dateType.serious.favPlace);


//merging objects
//using Object.assign()
let obje1={name:"raj",class:"4",isLoggedIn:false}
let obje2={name:"abcd",class:"56",sex:"male"}//if proprrty same overwrite it
let obje3={division:"A"}
let merged=Object.assign(obje1,obje2,obje3)// here obje1 is the target where all objects are merged
let mergedobje=Object.assign({},obje1,obje2,obje3)//here {} is the target mentioned explicitely where our objects are going to reside after merging
console.log("merged : ",merged);
console.log('mergedobje : ',mergedobje);
console.log(merged===mergedobje);


//using spread operator
//it is more used and easy and readable
let spreadedObj={...obje1,...obje2,...obje3}
console.log("spreadedObj : ",spreadedObj);


//when we fetch API genrally we get data as an array of objects

let data=[
    {   id:"qwe123",
        name:"prajjwal",
        class:"12th"
    },
    {
        id:"qwe124",
        name:"neil",
        class:"11th"
    },
    {
        id:"qwe125",
        name:"rahul",
        class:"10th"
    }
]

console.log(data[1].id);




//getting objects as array for extracting its keys,value or both keys and values

let object1={name:"prajjwal",class:"12th",isLoggedIn:false}
console.log('\n',"object1 : ",object1);
let keysArr=Object.keys(object1)//take keys of object1 and store in array and return that array
let valuesArr=Object.values(object1)//take values of object1 and store in array and return that array
let keyValueArr=Object.entries(object1)//take key value pairs and store each of them in separate arrays and store all array inside array and return outer array

console.log("\n","keys : ",keysArr);
console.log("\n","values : ",valuesArr);
console.log("\n","key&value : ",keyValueArr);
console.log("\n","key&value : ",keyValueArr[0]);
console.log("\n","hasProperty : ",object1.hasOwnProperty("name"));//return true if our object has given keyname
console.log("\n","hasProperty : ",object1.hasOwnProperty("id"));//return false if our object do not contain given keyname

// Object destructuring

let customer={customerId:"123we",customerPhone:"+9112223387",CustomerAadharcard:"1234 5678 1234"}
console.log("\n","CustomerAadhar: ",customer.CustomerAadharcard);//if we use like this it will not look good

// let {CustomerAadharcard}=customer
// console.log('\n',"aadhar",CustomerAadharcard);


let {CustomerAadharcard:aadhar}=customer
console.log('\n',"aadhar",aadhar);

//simply use a curly brace and destructure the properties of an object also you can rename the properties while destructuring
// let {actualpropertyname:yourgivenname,.............,......}=object







