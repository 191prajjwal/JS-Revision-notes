let inp = document.getElementById("inp");
let remainSpan = document.querySelector("#remain");
let prevSpan = document.querySelector("#prev");
let hint = document.getElementById("hint");
let result = document.querySelector("#result");

let random;
let attemptRemain;
let prevArray = [];

function start() {
  random = Math.random();
  random = Math.floor(random * 100 + 1);
  console.log(random);
  attemptRemain = 10;
  prevArray = [];
}

function reset() {
  remainSpan.innerHTML = "10";
  inp.value = "";
  attemptRemain = 10;
  prevSpan.innerHTML = "No guesses yet";
  prevArray = [];
  hint.style.display = "none";
}

start();

function submit() {
  if (inp.value <= 0 || inp.value > 100) {
    alert("Kindly enter number in specified range i.e between 1 and 100");

    inp.value = "";
    return;
  }

  inp.addEventListener("click", () => (result.style.display = "none"));

  if (inp.value < random)
    hint.innerHTML =
      "Hint : your guessed number is smaller than original number";
  else if (inp.value > random) {
    hint.innerHTML =
      "Hint : your guessed number is greater than original number";
  }

  if (inp.value == random) {
    result.style.display = "block";
    result.innerHTML = "Hurrey ! you guessed it right";
    result.style.backgroundColor = "green";
    inp.value = "";
    attemptRemain = 10;
    reset();
    setTimeout(() => alert("Game restarted "), 2000);
    start();
  } else {
    result.style.display = "block";
    hint.style.display = "block";
    result.innerHTML = "Not a correct guess";
    result.style.backgroundColor = "red";

    if (attemptRemain < 1) {
      alert("reached max guess limit");
      result.style.display = "none";
      reset();
      return;
    } else {
      console.log(attemptRemain);
      attemptRemain--;
      remainSpan.innerHTML = attemptRemain;
      prevArray.push(inp.value);
      console.log(prevArray);

      prevSpan.innerHTML = prevArray;
      return;
    }
  }
  return;
}

//will make it cleaner in next session
//once user won/ game is finished, disable the input field give a restart button
//if all attempts are exhausted tell the number to the user and disable the input field and give the restart button to
//try making separate functions for each functionality.
