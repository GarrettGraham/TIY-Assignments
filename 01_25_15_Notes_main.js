var assert = require('assert');

/* ---- pair programming ---- */

//can check the validity of a test and if it's working with a generic function or a console.log command

console.log(date());

//it('should totally fail', function () {
//    assert(false);
//});

function plus (a, b) {
    if (a == "zero") {
        return 0;
    } else {
        return 1;
    };
}

it('should have a function called `plus`', function () {
    assert.equal(plus);
    assert(typeof plus =='function');
});

it('should take "zero"', function() {
    assert.equal(plus("zero", "zero"), 0;
});
    

Queue : First-In-First-Out
Stack : Last-In-First-Out

    
The following is nested in node:
  
numbers = ["zero", "one", "two", "three" ]
numbers[0] ---> identifies whatever is at the zero index
numbers[1] ---> whats at the one index
toEnglish(o); ---> 'zero'
toEnglish(1); ---> 'one'

    
it('should take "one"', function (){
    assert.equal(plus("zero","one"), 1);
});