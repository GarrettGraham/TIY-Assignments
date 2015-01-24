var assert = require('assert') 

var toEnglish = ["zero", "one", "two", "three", "four", "five"];

var whatNum = function(a){
    if(a == 0) {
        return toEnglish[0];
    } else if(a == 1){
        return toEnglish[1];
    } else if(a == 2){
        return toEnglish[2];
    } else if(a == 3){
        return toEnglish[3];
    } else if(a == 4){
        return toEnglish[4];
    } else if(a == 5){
        return toEnglish[5];
    } else if(a == 6){
        return toEnglish[6];
    } else if(a == 7){
        return toEnglish[7];
    } else if(a == 8){
        return toEnglish[8];
    } else if(a == 9){
        return toEnglish[9];
    } else if(a == 10){
        return toEnglish[10];
    } else {
        console.log("I'm not able to count higher than ten.");
    }
}