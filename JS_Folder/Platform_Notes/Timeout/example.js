function codeToRunLater(){
    for (var i = 0; i < 1111; i++){
        console.log("running: " + i);
    }
}

setTimeout(codeToRunLater, 5000); // setTimeout will keep going to following code first while it waits for
                                  // the timer to elapse

console.log("END");