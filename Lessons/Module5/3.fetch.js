async function fetchUsers(){

    console.log("fetching users........");
   try { const response= await fetch("https://randomuser.me/api/")
    
   } catch (error) {
    console.log(error);
    
   }
    // console.log( typeof response,"\n",response)
    //response is of type object and it is not well formatted so lets convert it to json
    try {
        const data = await response.json()
    } catch (error) {
        console.log(error);
        
    }
    console.log(typeof data,data)
    //so if we do not use await before response.json() we get object promise which is pending this is because converting to json is also an async task so we have to wait for it. so use await before accessing the response.json
    
    //so now finally we got our data and we can access it.

}

// fetchUsers()



function fetchUsingThenCatch(){
  console.log("fetching....");
  
    fetch("https://randomuser.me/api/").then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err);
        
    }).finally(()=>{
        console.log("finally fetching request is executed it may be resolved or rejected")
    })

   
    
   


}

fetchUsingThenCatch()