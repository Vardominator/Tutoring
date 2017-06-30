var str = "A long " + "string that " + " goes on for a while......";

// length of string
str.length;

// putting double quotes in a string
var someStr = "the following is a word in a quotation: \"blah\" ";

// getting index of a substring
var indexOfWord = someStr.indexOf("word");

// slicing a string with starting and ending index
var slicedString = someStr.slice(indexOfWord, indexOfWord + 5);

// slicing a string with starting index and length
var subString = someStr.substr(indexOfWord, 5);

// replace substring
var strWithReplacement = str.replace("that", "which");

// extract character
var someChar = str.charAt(10);

// convert string to array of characters
var arrayStr = str.split(" ");

// convert to all uppercase or lowercase
str.toLowerCase();
str.toUpperCase();


// styling strings
str.big();
str.bold();
str.italics();
str.sub();
str.sup();
str.link();
str.fontsize("10em");