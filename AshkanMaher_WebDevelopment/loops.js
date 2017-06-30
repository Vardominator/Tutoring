var i = 1;

// simple example
while(i <= 10){
    // will continue to print value of i and increment it until the condition is broken
    document.write(i + "<br />");
    i++;
}


// do while example
do{
    // run the code here at least once before checking condition
    var guess = prompt("Guess a number between 1 and 20");
}while(guess != 15)

alert("you guessed 15!");



// for loop: perform set amount of iterations
for(j = 0; j <= 20; j++){
    if((j % 2) === 0){
        // stop everything else in the loop and jump to top to start again
        continue;
    }

    if(j === 15){
        // exit the loop structure
        break;
    }

    document.write(j + "<br / >");

}


// key-value pairs (not important atm)
var customer = {name : "Bob Thomas", address : "123 Mina", balance: 50.50};

for(k in customer){
    document.write(customer[k] + "<br />");
}