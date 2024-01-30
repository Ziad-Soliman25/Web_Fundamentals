function edit(element){
    document.querySelector(element).innerText = "Ziad Soliman"
}

var count = 2;

function remove(element, id){
    count -= 1
    document.querySelector(id).innerText = count;
    document.querySelector(element).remove()
}