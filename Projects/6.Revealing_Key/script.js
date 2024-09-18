document.addEventListener("keydown",(e)=>{
console.log(e)

let tableBody=document.getElementById("tableBody")

tableBody.innerHTML=`

<tr>
<td>${e.key===" "?"space":e.key}</td>
<td>${e.keyCode}</td>
<td>${e.code}</td>
</tr>

`
document.getElementById("table").style.display="inline-block"


})