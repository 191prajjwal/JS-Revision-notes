//Date() is a constructor function in js which is used to give date and time as object in js

let mydate= new Date()
console.log(mydate);//it gave date and time  in ISo format that is way to represent timestamp in Machine
console.log(typeof mydate);// it is an object as we used Date() constructor

console.log(mydate.toString());//it gives date and time in some reading format
console.log(mydate.toLocaleString());//gives date and time in local format(where my code space is present) but time is in standard HH:MM:SS format but we want it in our local format
// if we do same thing in our local machine or in console we get our indian format as machine is configured already for it

console.log(mydate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))// now everything is in our format
console.log(mydate.getFullYear());//gives yea
console.log(mydate.getDate());
console.log(mydate.getTimezoneOffset());
console.log(mydate.toLocaleDateString());


// so there are lots of functions in date and time


// creating date object for my given date

let createdDate= new Date(2000,0,19) //give input in YYYY/MM/DD month starts from 0 means jan and 11 means dec 
console.log(createdDate.toLocaleString());

let createdDateTime=new Date(2000,2,10,16,40)// give date and time both if you want and if you write time in 5,40 it is 5;40 am but if you write 17,40 then it is 5:40 pm
console.log(createdDateTime.toLocaleString());

//if we want to give input in our format like MM/DD/YYYY we can do it 

let ourDate= new Date("01/19/2000") //since we are passing string so give month 01 for jan and 12 for dec
console.log(ourDate.toLocaleString());
console.log(ourDate.getTime()); // gives timestamp means gives no of milliseconds from 1 jan 1970 to till ourDate






let timestamp= Date.now()//gives number of milliseconds from 1 jan 1970 to till current
console.log(timestamp);

// if we want our time in seconds do divide timestamp by 1000 since 1 sec=1000ms // if want it in minutes again divide by 60 if want in hour again divide by 60 and if want in days again divide by 24 and so on

console.log("in seconds "+Math.round(timestamp/1000));
console.log("in minutes "+Math.round(timestamp/(1000*60)));
console.log("in hours "+Math.round(timestamp/(1000*60*60)));
console.log("in Days "+Math.round(timestamp/(1000*60*60*24)));
console.log("in approx Years "+(timestamp/(1000*60*60*24*365)).toFixed(1));





// if we have a date and time and  we want to perform operation in it like subtraction and all then convert both in timestamp milliseconds and then perform operation

//let calculate my current age

let dob= new Date("01/19/2000")
console.log(`dob is ${dob}`);
let dobTimestamp=dob.getTime()
console.log(`dob Timestamp  is ${dobTimestamp}`);

let age= (Date.now()-dobTimestamp)/(1000*60*60*24*365)
console.log(` my current age is ${age.toFixed(1)} years`);




//we can customize in which format how we want our date and time
console.log("\n");

let newDate= new Date()
console.log(newDate);
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleString("en",{dateStyle:"long",timeStyle:"short",timeZone:"asia/kolkata"}));










