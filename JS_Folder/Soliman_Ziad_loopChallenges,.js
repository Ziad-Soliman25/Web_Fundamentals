// print odds 1-20
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// Decrease in multiples of 3
for (var i = 100; i >= 0; i--) {
    if (i % 3 == 0) {
     console.log(i);
    }
}

// print the sequence
var arr= [4, 2.5, 1, -0.5, -2, -3.5]
for (var i = 0; i< arr.length; i++){
    console.log(arr[i]);
}

// sigma
function sigma(num){
    var sum = 0;
    for (var i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}
console.log(sigma(100))

// factorial
function factorial(num){
    var product = 1;
    for (var i = 1; i <= num; i++){
        product *= i;
    }
    return product;
}
console.log(factorial(12))