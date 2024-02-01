var cardsDiv = document.querySelector("#cards");
var currentUsername = ""

function getUsername(element) {
    console.log(element.value)
    currentUsername = element.value;
}

function makeCoderCard(data) {
    // this is a long way of doing this process
    // var response = "<div class=\"card\">"
    // return response + "</div>"

    // var res = `this is my name ${data.login}`;
    var res = `<div class="card">
                    <<img src="${data.avatar_url}" alt="${data.login}">
                    <div class="flex-1">
                        <h3>${data.login} - ${data.name}</h3>
                        <p>Location: ${data.location}</p>
                        <p>Repositories: ${data.public_repos}</p>
                    </div>
                <div>`
                // this looks like an HTML but in reality it is just a string
    return res
    // console.log(res);
}

async function search() {
    // var response = await fetch("https://api.github.com/users/dev-marisa");
    var response = await fetch("https://api.github.com/users/" + currentUsername);
    var coderData = await response.json();
    console.log(coderData);
    cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;
    // .innerHTML when given a string that looks like HTML will try to tun it into HTML
}









async function enter(event) {
    // var response = await fetch("https://api.github.com/users/dev-marisa");
    var response = await fetch("https://api.github.com/users/" + currentUsername);
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementsByName("username").click();
    }

    var coderData = await response.json();
    console.log(coderData);
}
