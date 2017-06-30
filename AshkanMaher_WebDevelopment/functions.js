
function inArray(arrayToCheck, value){
    
    for(i = 0; i < arrayToCheck.length; i++){
        if(arrayToCheck[i] == value){
            return true;
        }
    }
    return false;

}


var someArray = [1,2,3,4,5];

// call function to execute function; check if 4 is inside array
document.write("In array : ", inArray(someArray, 4), "<br />");