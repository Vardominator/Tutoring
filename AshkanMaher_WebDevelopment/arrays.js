var info = ["Bob Smith", "123 Main", 120.50];

// access different values using an index value; index starts at 0
document.write("1st index ", info[0], "<br />");

// appending array
info[3] = "blah@blahcenter.com";

// overwriting values
info.splice(2, 1, "Pittsburgh", "PA");
// start and index 2 and overwrite 1 thing

// deleting values
info.splice(4, 1);
// start at index 4 and delete 1 thing

// convert array to string
document.write("Array :", info.join(", "), "<br />");

// delete index
delete info[3];


// combine arrays
var numbers = [4, 3, 9, 1, 20, 43];
var combinedArray = numbers.concat(info);

// remove last item
info.pop();

// add item to the end
info.push("5551212", "US");

// cycle through array using a loop (super important)
for(i = 0; i < info.length; i++){
    document.write(info[i], "<br />");
}