
//++++++++++++        WAY-1         +++++++++++++++++++++++

// function changeBcg(color){
//     let body= document.body
//    let target=document.getElementById(`${color}`)
// //    console.log(target);
//    body.style.backgroundColor=`${color}`
// }







//++++++++++++        WAY-2         +++++++++++++++++++++++

// function changeBcg(index){
//    const btn= document.querySelectorAll("button")
//     console.log(btn);
//     document.body.style.backgroundColor=btn[index].id;
// }





//++++++++++++        WAY-3        +++++++++++++++++++++++

const btn=document.querySelectorAll("button")
btn.forEach((item)=>{
    item.addEventListener("click",(e)=>{
      document.body.style.backgroundColor=e.target.id
    })
})

