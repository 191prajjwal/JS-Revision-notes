// +++++++++++++++creating promise++++++++++++++++

const promiseOne= new Promise(function(resolve,reject){

    setTimeout(()=>{console.log("Async task 1 is done ")
        resolve()
        //if our task is completed after 2s then say it is resolved and using dot then we can perform a logic like what to do if our promise is resolved.

    },1000)

})

promiseOne.then(()=>{
    console.log("promise 1 is resolved\n");

})

//promise without name
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 2 done");
        resolve()
    },2000)
}).then(()=>{
    console.log("promise 2 is resolved\n");

})

//passing resolve values when promise is resolved
const promise3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("we can perform any asynchronous task inside promise not necessarily setTimeout always.");
        resolve({username:"prajjwal",age:24})
        //when our promise is resolved we send this value

    },3000)
})

promise3.then((data)=>{
console.log(data ,"\n");

})//getting value from resolve and using it

//using .catch to handle error

const promise4= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        //make it true to see what happens if error comes and false to see what happens if no error
        if(error)
        {
            reject("Error: Daya kuch to gadbad hai daya")
        }

        else{
            resolve({username :"Abhijieet",age:"40yrs"})
        }

    },4000)
})

promise4.then((data)=>{

    return data.username
    //this will again return a promise hence we can use another .then to get its value.

}).then((username)=>{
console.log(username);
//appending .then just after another .then and so on this is called promise chaining.
}).catch((error)=>{
    console.log(error);

}).finally(()=>{
console.log("i will run when promise is completed no matter it is resolverd or rejected",'\n');

})




const promise5 = new Promise((resolve, reject) => {
 setTimeout(()=>{
    console.log("came inisde promise5");
    const error = false;
    if (error) {
      reject("error came bhidu");
    } else {
      resolve("promise5 resolved");
    }
 },5000)
});

const consumePromise5 = async function () {
  console.log("came to consume promise5");

  try {
  const response=  await promise5;//it will return whatever we pass in resolve in promise
  console.log(response);
  
    
  } catch (err) {
    console.log(err);
  }
};

consumePromise5()//this will run first because all other are asynchronous tasks but the function call is synchronous so hence "came to consume promise5" will be printed first then it will try await promise5 hence it will come out and run outer tasks first like executing promise 1 2 3 4 then after that it will come and give the response of await and print it.