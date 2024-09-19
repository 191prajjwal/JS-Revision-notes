const inp = document.getElementById("inp");

function inputCheck() {
    if (inp.value !== "") return true;
    else return false;
}

function getProfile() {
    if (inputCheck()) {

        const requestURL = "https://api.github.com/users/" + inp.value;

        const xhr = new XMLHttpRequest(); //initializes an XMLHttpRequest object
        xhr.open("GET", requestURL);//telling the type of request and giving url of endpoint

        xhr.onreadystatechange = function ()   //this function will run on each stateChange
        {
            console.log(xhr.readyState);//logs the state of our request
            if (xhr.readyState === 4) { //if our request is closed means we have either got our data from endpoint  or request is rejected or failed
                const data = JSON.parse(this.responseText); // this.responseText refers to data we recieved but data is in string form so conver string to JSON using JSON.parse()
                console.log(data);//got data in JSON Object form

                if (data.message === "Not Found") {
                    return alert("User Not Found");
                }

                let card = document.querySelector(".card");
                card.style.display = "block";
                card.innerHTML = `<h3>  <a href=${data.html_url} target="_blank">${data.login} </a></h3>  <img src=${data.avatar_url}/> <p>${data.bio}</p> <ul> <li> Followers : ${data.followers}</li> <li> Following : ${data.following}</li> <li>Repositories : ${data.public_repos}</li>`;
            }
        };


        xhr.send();
    }

    else alert("Username is required");
}

document.getElementById("btn").addEventListener("click", getProfile);

document.addEventListener("keydown", (e) => {
    if (inputCheck()) {
        if (e.key === "Enter") {
            e.preventDefault();
            getProfile();
            return;
        }
    }
});
