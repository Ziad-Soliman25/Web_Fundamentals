var animalImg = document.querySelector("#fav-animal");

console.log(animalImg);

function pickCat(elem) {
    // console.log(elem);
    // console.log(elem.style);  this will tell you all of the CSS propoerties you can use in JS
    // elem.style.backgroundColor = "goldenrod"
    elem.remove();
    animalImg.src = "https://placekitten.com/300/300";
    // console.log(animalImg.src);
}

function pickDog(elem) {
    // console.log(elem)
    elem.classList.add("btn")
    animalImg.src= "https://placedog.net/300/300";
    // console.log(animalImg.src);
}


var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}
