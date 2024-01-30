var nameSpan = document.querySelector("#name");
var foodToOrder = "Pizza";

function setName(elem){
    console.log(elem.value);
    nameSpan.innerText = elem.value;
}

function pickFood(elem){
    console.log("The food is " + elem.value);
    foodToOrder = elem.value; 
}

function order(){
    alert("Ordering a " + foodToOrder);
}