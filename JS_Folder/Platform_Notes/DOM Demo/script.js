// THIS KEYWORD

function foo(elem) {
  console.log(elem)
  // elem.innerText = "This text just got changed."
  elem.remove()
}

function changePicture(elem) {
  console.log(elem.src)
  if (elem.src == 'https://placekeanu.com/300/300') {
    elem.src = './supercumber.jpg'
  } else {
    elem.src = 'https://placekeanu.com/300/300'
  }
}

// DOCUMENT QUERY SELECTOR

function bar(idParam) {
  console.log(idParam)
  // querySelector needs a string that is a valid
  // CSS selector
  // #id  or a  .class or a h1  or a .class h2
  // needs to be written as we would in the CSS file
  var elem = document.querySelector(idParam)
  // var elem = document.querySelector('li')
  console.log(elem)

  // elem.innerText = "I changed the name"
  // elem.style.backgroundColor = "tomato"
  elem.classList.add("test")
}

// ADDING HTML TO A PAGE

function foobar() {
  var elem = document.querySelector('#soup-list3')

  console.log(elem)
  // elem.innerText = "This text just got changed."
  elem.innerHTML = "<li>Here is a new li elem</li>"
  // elem.innerText = "<li>Here is a new li elem</li>"

}

// ON INPUT AND ON CHANGE

function chooseLunch(element) {
  alert("You picked " + element.value);
}

function inputText(elem) {
  console.log(elem.value)
}


function message() {
  console.log("Delayed message");    
}

console.log("Start");
// passing the function as an argument
// run this function after a period of time
// Asynchronous programming
setTimeout(message, 1);
console.log("End1");
console.log("End2");
console.log("End3");
console.log("End4");
console.log("End5");
