// Relational operators: == != > < >= <=
// Logical operators: && \\ !


var age = 8;

// if below statement is true
if((age >= 5) && (age <= 6)){
    // then perform what's in here
    document.write("Go to Kindergarten" + "<br />");
} else if (age > 18) {
    // else if above statement is true then perform what's in here
    document.write("Go to College" + "<br />");
} else {
    // if nothing above is true then perform what's in here
    document.write("Go to grade ", age - 5, "<br />");
}


document.write("true || false ", true || false, "<br />");
document.write("!true ", !true, "<br />");
document.write("5 == 5 = ", (5 == 5), "<br />");
document.write("5 == 6 = ", (5 == 6), "<br />");
document.write("5 != 6 = ", (5 != 6), "<br />");
document.write("5 >= 6 = ", (5 >= 6), "<br />");
document.write("5 < 6 = ", (5 < 6), "<br />");
document.write("5 > 6 = ", (5 > 6), "<br />");
