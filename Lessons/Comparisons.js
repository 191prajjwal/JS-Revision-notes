console.log(2>1)
console.log(2<1)
console.log(2>=1)
console.log(2<=1)
console.log(2=='2')
console.log(2==='2')//strict equal to comparison 
console.log(2!='2')
console.log(2!=='2')//strict not equal to comparison


console.log("2">1)//not a good practice so avoid doing things like this

console.log(null>0)//comaparisons like > < >= <= converts null to 0 then comapare
console.log(null==0)//it direcly compares null with 0 without any conversion hence false
console.log(null===0)
console.log(null>=0)
//these all are not good practice

console.log(undefined==0)