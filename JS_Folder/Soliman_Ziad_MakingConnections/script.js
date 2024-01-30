function edit(element){
    document.querySelector(element).innerText = "Ziad Soliman"
}

var count = 2;

function remove(element, id){
    count -= 1
    document.querySelector(id).innerText = count;
    document.querySelector(element).remove()
}

var count2= 500;

function addConnection(paramId){
    count2 += 1
    document.querySelector(paramId).innerText = count2;
}