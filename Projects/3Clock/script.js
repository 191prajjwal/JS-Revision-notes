function clock(){
    const time= document.getElementById("time")
let date = new Date()
date = date.toLocaleTimeString()
time.textContent=date

}

clock()

setInterval(clock,1000);