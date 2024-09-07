for( i=1;i<=10;i++){
    const element= i    //for each value of i each i is less than equal to 10 perform block code then increment i then again check condition and so on until condition fails
    console.log(element);
    
}

console.log(i);//we must use let and const for this because using var or just i=1 with make i a property of window hence it will be accessible outside of the for block which is unintended.



// printing multiplication table from 1 to 10 using inner loops

for(let i=1;i<=10;i++)
{console.log(`multiplication table of ${i}  : `)
for(let j=1;j<=10;j++)
    console.log(`${i}x${j} = ${i*j}`)
}


let myHeroes=["Thor","Captain-America","Black-Panther","Black-widow","Hulk","Vision","Wanda","Thanos"]

for(i=0;i<myHeroes.length;i++)
{
    console.log(myHeroes[i])
}



//break and continue

//break : if we want to come out of our loop if a certain condition hits we use break
//if we want to come out if i===8 before printing 8
for(let i=1;i<=10;i++)
{
    if(i===8)
    {
        console.log(" 8 is detected");
        break;  
    }

    console.log(i);
    
}

//continue: if we want to skip the loop statements for a certain value that matches a given condition but we want to continue executing the loop statements for other comming values we use continue

//if we want as soon as 6 comes dont run block but run block for other upcoming values

for(let i=1;i<=10;i++)
{
    if(i===6)
    {
        console.log("6 is detected");
        continue
        
    }
    console.log(i)
}



//////////////////////////////////////////////++Whie loop+++++///////////////////////////////


let arr=[1,4,6,8,"yes",true,"hello",null,false,['ye']]
let index=0
while(index<arr.length){
    console.log(arr[index])
    index=index+2
}




/////////////++ do while loop+////////////////
let ind=100
do{
    console.log(ind)
    ind-=10
}

while(ind>=0)
//do task first then check condition