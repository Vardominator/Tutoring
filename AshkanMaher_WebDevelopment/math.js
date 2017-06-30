// string concatenation
document.write("5 + 4 = ", 5 + 4, "<br />");
document.write("5 - 4 = ", 5 - 4, "<br />");
document.write("5 * 4 = ", 5 * 4, "<br />");
document.write("5 / 4 = ", 5 / 4, "<br />");
document.write("5 % 4 = ", 5 % 4, "<br />");
document.write("Max Num = ", Number.MAX_VALUE, "<br />");
document.write("Min Num = ", Number.MIN_VALUE, "<br />");

// rounding (to decimal places)
var balance = 1563.87;
document.write("Monthly Payment : ", (balance / 12).toFixed(2), "<br />");

// increment and decrement ('--', '++')
var randomNum = 5;
// print random number and then incremenet
document.write("randomNum++ = ", randomNum++, "<br />");
// increment and then print random number
document.write("++randomNum = ", ++randomNum, "<br />");

// change value and update variable shortcut
document.write("randomNum += 5 = ", randomNum += 5, "<br />");
document.write("randomNum -= 5 = ", randomNum -= 5, "<br />");
document.write("randomNum *= 5 = ", randomNum *= 5, "<br />");
document.write("randomNum /= 5 = ", randomNum /= 5, "<br />");


// order of operation using perenthesis
var someNum = 5;
document.write("3 + 2 * 5 = ", 3 + 2 * 5, "<br />");
document.write("(3 + 2) * 5 = ", (3 + 2) * 5, "<br />");

// built in math functions and constants
// Math.abs(), .cbrt(), .ceil(), .floor(), .round(), .log(), ...

// random numbers
document.write("Random # (1-10) = ", Math.floor((Math.random()) * 10), "<br / >");

// convert string to a number
Number("3.14");
// convert string to an int
parseInt("5")
// convert string to a float
parseFloat("5.14");