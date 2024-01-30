var count = [0,0,0];
// var countElem = document.querySelector("#likes1")

function increaseLikes(idParam, index){
    // var newCount = document.querySelector(idParam);
    count[index]++
    document.querySelector(idParam).innerText = count[index] + " like(s)"
    // newCount.innerText++;
}

