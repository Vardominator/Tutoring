
var name = prompt("What is your name?");

if(name != null){
    document.getElementById("sayHello").innerHTML = "Hello " + name;
}else{
    alert("You did not enter a name...");
}