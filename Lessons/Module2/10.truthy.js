if("hello"){
    console.log("done 1");
    
}

if(""){
    console.log("done 2");
    
}

if ([])
{
    console.log("done 3");
    
}

if(NaN)
{
    console.log("done 4");
    
}




// passing these values will result in true or false inside conditional statements like if()

//the values that evaluates true is called truthy
//some common truthy values are:
// truthy values: "0"(not an empty string so true),"false"," ",[],{}, function(){}

//the values that evaluates false
//falsy values
//0,-0,null,0n(bigint 0),undefined,false,NaN,""(empty string)



// +++++++++++++nullish coalescing operator++++++++++++

// a??b will give result a if a is not null or not undefined and it ignores b upfront

//a??b will give b if a is null or a is undefined then it dont care what b is and just return b


console.log(12??34)
console.log(null??34)
console.log(undefined??null)


//ternary  operations

12>4?console.log("yes yes yes"):console.log("no no no")

12>40?console.log("yes yes yes"):console.log("no no no")