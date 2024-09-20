const promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("hi");
    // resolve()
    reject("error came ")

    },2000)

})



async function consumePromise(){
    console.log(5)
    console.log(6)
    try{await promise}
    catch(err){
        console.log(err);
        
    }
//these all below tasks inside this async function will be only executed once await is done.
    console.log("hello")
    console.log(7)
console.log(8)
}



console.log(1)
consumePromise()
console.log(2)
console.log(3)
console.log(4)


//so firstly 1 will be printed.
//then consumePromise will come in picture and it is async type function it will then print 5 ,6, now it saw await so it will not execute the function afterwards and it comes back and run all the synchronous tasks outside it so print 2 ,3,4 not it will go inside it and run await promise and logs hi then since we sent reject so it will say error due to try catch now it will print hello 7 8