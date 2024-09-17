// //events are some actions or activity that we perform in our webpage like scroll , click, submit,move ,doubleClick etc.

// //suppose we want to get alert on clicking an image then we can either use onClick directly on button and do alert like onclick="alert('clicked')"

// //this is not scalable as when we have big projects we may have some issues 

// //we can do this

// // document.getElementById("tree").onclick=()=>alert("clicked treee")

// //but this is also not that powerfull because we want to have not just the click we want sometimes more data about event 

// //hence we use eventlistners

// // document.getElementById("tree").addEventListener('click',function(e){
// //     console.log(e);
    
// //     alert("clicked tree done")})

// //addEventlistner has three args: 1. event like click , move , scroll etc.
// // 2.callback function which will be executed on event triggering.
// //3.a optional argument : boolean value set to false by default if not given.

// //the callback function of addeventlistner has event as a parameter. this event is nothing but an object having all the info of event

// //there are lots of info about event like type,timestamp , view,target,preventDefault(), target.value,toElement,srcElement etc. 
// //clentX,clientY
// //altkey,ctrlkey,keycode

// //go and read it from mdn doc some of these events


// /////++++++++++++++EVENT Propagation+++++++++/////
// //Event bubbling and event capturing are two types of event propagation

//bubbling means going up 
//capturing means going down



// document.getElementById("images").addEventListener('click',(e)=>
// {console.log( ("clicked the list container"))
   
// },false)

// document.getElementById("tree").addEventListener('click',()=>console.log(
// ("clicked the tree image")),false)


// //since ul has lots of li present consisting of img so clicking anywhere inside ul will trigger event and it will console "clicked the list container"

// //also when we click on tree image there is one dillema since we have event listners for both tree image and whole ul so clicking on tree also means clicking on ul so what will be printed first is the dillema

// //if we click anyother image where eventlister for it is not added indivisually like tree image then we will get "clicked the list container"

// //now if we click the tree we can see in console

// //"clicked the tree image" is consoled first
// //"clicked the list container" is after it

// //this is bubbling up also called event bubbling propagation that means it bubble up from below to up , so if both parent and child are having eventlistners then by default due to bubbling up child's event will be triggered first in case of colliding events and then it will bubble up to parent.

// //if inside both event listners we give true instead of false(or we can give it inside parent only i this case) then this is called event capturing and in this  case firstly top level element's event is executed then bottom level in case of conflict hence 
// //"clicked the list container" is done first then "cliked the tree image"

// //so we got what event bubbling,and event capturing propagation.

// //if we dont want to propagate our event to bubble up we can  do this

// document.getElementById("foolish").addEventListener(
//     "click",(e)=>{
//     e.stopPropagation()
//     console.log("foolish clicked")},false
// )

// //here we said to stop propagating events up to this, so bubbling up is stopped. and only "foolish clicked is consoled"


//                            Event capturing        //

// document.getElementById("images").addEventListener('click',(e)=>
//     {console.log( ("clicked the list container"))
//         e.stopPropagation()
//here we are saying that we will stop propagation from parent so event capturing will be stopped from here and it will not go down and only "clicked the list container"  is printed 
//     },true)

// document.getElementById("bridge").addEventListener('click',(e)=>{
//     console.log("bridge is clicked"); 
// },true)

//set above event on #images as true to enable capturing mode
//now if we click on image of bridge wwe will get  "clicked the list container"  and "bridge is clicked" both will print. hence if true is there in third arg of event listner then the event will propagate downwards hence on clicking bridge firstly  ul event is triggered and then propagated to below and bridge event is triggered.
//we can stop this capturing effect by putting e.stopPropagation() inside parent.





// //if we click on anchor tag now then its default behaviour is it will open the link but in any weird case if we do not want to do that then 

// document.getElementById("google").addEventListener('click',(e)=>{
    
//     console.log("clicked google link");
//     e.stopPropagation()
//     e.preventDefault()
    
// })
// //so we prevented default behaviour of anchor tag

// //also we use preventDefault extensively to submit forms and all





// document.getElementById("images").addEventListener('click',(e)=>
//     { 
//         // e.stopPropagation()
//             // e.stopImmediatePropagation()
//         console.log( ("clicked the list container"))
       
//     },true)
    
//     document.getElementById("tree").addEventListener('click',(e)=>
//         {
//             // e.stopPropagation()
//             // e.stopImmediatePropagation()
//      console.log((" event1: 1st click "))
     
// }
//     ,false)

//     document.getElementById("tree").addEventListener('click',(e)=>
//         {

//             // e.stopPropagation()
//             // e.stopImmediatePropagation()
// console.log(("event2:2nd click"))
// }
//     ,false)


//     document.getElementById("tree").addEventListener('click',(e)=>{

//         // e.stopPropagation()
//         //     // e.stopImmediatePropagation()
//         console.log(("event3:3rd click"))

//     }
//     ,false)
    


// //if we do not stop any propagation and all then all event:1 , event:2 and event:3 will be triggered and then bubbling up done at parent if parent's third arg is false.

// //if in any child we use e.stopPropagation() then bubbling to parent is stopped but all the events on child is executed.

// //if we used e.stopImmediatePropagation() in any child then both bubbling and all next events on same element will not be propagated.



// //if we do enable event capturing by giving third arg as true to parent
// //then from prent the event will be executed to down.
// //to stop capturing from parent use e.stopPropagation() inside it.using e.stopImmediatePropagation() inside parent will also do same in this case.











// TASK-1
// implement a logic such that when we click an image it should be removed (means the li consisting image will be gone).


document.getElementById("images").addEventListener('click',(e)=>{
    console.log(e.target);
    //the target will be the actual element we clicked no matter it is inside someother element or not but the target always says which element is actually clicked like inside #images if we click img3 then target will be img3 not the #images.

    //if we click on an image we want to remove its imediate parent that is li so how to go to parent

    console.log(e.target.parentNode)


    //we do not want to dlete on clicking li or ul but we want to delete on clicking image

    //so if you click on li nothing should be delted
    //if you click on ul then also nothing is to be delted

    let targetToRemove=e.target.parentNode


    if(targetToRemove.id==="images" || targetToRemove.id==="div1")
    {console.log("do not delete this");
    
        return
    }
    //the above if block ensures when we click on li or ul nothing is deleted and deletion is only done once we click on image


    else

    targetToRemove.remove()
    //or we can do it like
    // targetToRemove.parentNode.removeChild(targetToRemove)

    //which one you like use i will use rmove() directly.

    
})