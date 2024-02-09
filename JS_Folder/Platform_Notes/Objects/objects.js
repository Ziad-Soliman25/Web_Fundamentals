// Array

var userInfo = ['Jim', 'Reeder', 'jr@dojo.com', ['cookies and cream', 'pistachia', 'watermelon', 'buttered lobster', 'garlic']]



// Object- composite data type
// objects in Python, Java, C#, C++ and so on are more complex than objects in JS
// HAS NO INDEXES (objects are unordered)
// key / Value pairs
// keys are kind of like variables
// syntax: objects use curly braces {}


var userObj = {
    firstName: 'jim',
    lastName: 'Reeder',
    email: 'jr@dojo.com',
    favoriteIceCreamFlavor: ['cookies and cream', 'pistachia', 'watermelon', 'buttered lobster', 'garlic'],
    printFullName: function() {
        console.log(this.firstName + ' ' + this.lastName)
    }
}

// access an object: dot notation
console.log(userObj.firstName)
console.log(userObj.favoriteIceCreamFlavor[0])


var dogObj = {
    name: 'Vicky',
    hairColor: 'brindle',
    age: 6,
    favoriteToy: 'stuffed duck'
}

console.log(dogObj.name)
// displays name of dog

var users = [
    {name: 'Shawn'},
    {name: 'Heidi'},
    {name: 'Jim'},
    {name: 'Tyler'},
    {name: 'Max'},
    {name: 'John'},
]

for (var i = 0; i < users.length; i++){
    console.log(users[i].name)
}

// Add data to an object
userObj.favoriteFood = 'mushroom chimichangas'

console.log(userObj.printFullName())

// other way to access objects
// using brackets and a string for the key
var key = 'lastName'
console.log(userObj[key])