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
    } else {
        console.log('too high to count');
    }
}