const form= document.querySelector("form")
console.log(form)
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    //to prevent default submit behaviour of our form which is used to send form data to servers and refresh the page.

  let height= form.querySelector("#height").value
  const weight= form.querySelector("#weight").value

 const result= document.querySelector("#result")
 result.style.display="inline-block"

 if( height==="0")
 {
   result.innerHTML="<span>Come on, No one has a height of zero 😒<span>"
   return
 }

  if(weight==="0"){

    result.innerHTML="<span>You're not a ghost, are you? You must weigh something!😂<span>"
   return
  }

  height=height/100
 //converting height in meters
  const bmi = (weight/(height*height)).toPrecision(4)

  let bodyType= bmi<18.6?"underweight":bmi>=18.6 && bmi<24.9?"Normal":"overweight"

let nextText= bodyType==="Normal"?"Good Work keep it up!"

: bodyType==="underweight"?"<span> click <a class='link' href='https://www.healthline.com/nutrition/how-to-gain-weight' target='_blank'>here</a> to read an article about gaining weight</span>"

:"<span> click <a  class='link' href='https://www.health.harvard.edu/topics/diet-and-weight-loss' target='_blank'>here</a> to read an article about loosing weight</span>"


  result.innerHTML=`<span id="BMI">Your BMI is ${bmi}</span> <br/><br/> <p >According to your BMI your body is <span id="highlightedText">${bodyType}</span> </P> <br/> <p id="nextStep">${nextText}</p>`



  const para= document.querySelector("#highlightedText")
  
para.style.backgroundColor= 
bodyType==="Normal"?"green":
bodyType==="underweight"?"orange":"red"


})