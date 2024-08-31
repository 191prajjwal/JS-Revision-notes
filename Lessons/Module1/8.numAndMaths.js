let num1=100
console.log(num1);

let num2= new Number(400)
console.log(num2);
console.log(typeof num2);

num2=400.1637
let num=num2.toFixed(2)
console.log(num);
console.log(typeof num);

num=num2.toPrecision(3)
console.log(num);
console.log(typeof num);

num=num2.toPrecision(4)
console.log(num);
console.log(typeof num);


let num3=1000000
num=num3.toLocaleString()
console.log(num);
console.log(typeof num);

num=num3.toLocaleString("en-In")//make number readable as per indian number formatting
console.log(num);
console.log(typeof num);

// In console go and do Number.  and you will see lots of function like Number.isNan()  Number.MAxvalue and all and they are quite useful




/*++++++++++++++++ Math ++++++++++++++++ */
console.log('\n');

console.log(Math.abs(-4));
console.log(Math.round(5.7));
console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.min(23,65,89,4,3,6));
console.log(Math.max(5,9,1,4,88,98,1045,987));
console.log(Math.random());//gives random number between 0(inclusive) and 1(exclusive)


//using Math.random() to generate random number b/w 1 and 5(both inclusive) using a function

console.log('\n');


function generateRandom(min,max){
    let randomNumber=Math.random()
    randomNumber=Math.floor(randomNumber*(max-min+1))+min
    return randomNumber

}

let randomNum=generateRandom(1,5)
console.log(randomNum)

