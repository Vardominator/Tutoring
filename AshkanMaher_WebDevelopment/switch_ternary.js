var age = 5;

// use switch statement to check potential values of a given variable
switch(age) {
    case 5:
    case 6: 
        document.write("Go to Kindergarten" + "<br />");
        break;
    case 7:
        document.write("Go to 1st grade" + "<br />");
        break;

    default:
        // if all else fails
        document.write("Subtract 5 from your age" + "<br />");
}


// use ternary operator as a more versatile conditional tool
// (condition) ? ifTrue : ifFalse
var age = 5;
var canIVote = (age >= 18) ? true : false;
document.write(canIVote);