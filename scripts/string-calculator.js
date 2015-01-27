var assert = require('assert');


console.log(Date())

assert(plus)
assert.equal(typeof plus, 'function');
});


it('should add "zeros"', function () {
    assert.equal(plus("zero", "zero"), 0);
    assert.equal(plus("zero", "one"), 1);
    assert.equal(plus("zero", "two"), 2);
    assert.equal(plus("zero", "three"), 3);
    assert.equal(plus("zero", "four"), 4);
    assert.equal(plus("zero", "five"), 5);
    assert.equal(plus("zero", "six"), 6);
});

is('should add "one" to everything', function () {
    assert.equal(plaus("one", "zero"), 1);
});

    
function plus(A, B) {
    var numbers = {
        "six": 6,
        "five": 5,
        "four": 4,
        "three": 3, //commas seperate values/elements/keys in a list
        "two": 2,
        "one": 1,
        "zero": 0
    };
    
    return numbers[B];
    
//    if (B == "six") {
//        return numbers[B];
        
//        return numbers["six"]; //sub "six" and sub B reference back to the key that is defined above
//        
//        return 6; // corrisponds to `return numbers["six"]; do not need the return 6 if you have defined B above. A is always zero so we dont worry about it now
        
    }
    if (B == "five") {
        return 5;
    }
    if (B == "four") {
        return 4;
    }
    if (B == "three") {
        return 3;
    }
    if (B == "two") {
        return 2;
    }
    
    if ( B == "one") {
        return 1;
    }
}
//Rondori Style Kata



//function plus (A, B) {
//    return 6;
//}
//it('should add "zero" and "five"', function () {
//    assert.equal(plus("zero","five"), 5);
//});

//function plus(A, B) {
//    return 5;
//}
//
//it('should add "zero" and "five"', funtion () {
//   assert.equal(plus("zero","five"), 5);
//});

//function plus(A, B) {
//    return 4;
//}
//it('should add "zero" and "four"', function () {
//    assert.equal(plus("zero","four"), 4);
//}

//function plus(A, B) {
//    return 3;
//}
//
//it('should add "zero" and "three"', function () {
//    assert.equal(plus("zero","three"), 3);
//});

//function plus(A, B) {
//    return 2;
//}
//
//it('should add "zero" and "two"', function () {
//    assert.equal(plus("zero","two"), 2);
//});


//function plus(A, B) {
//    return 1;
//}
//
//it('should add "zero" and "one"', function () {
//    assert.equal(plus("zero", "one"), 1);
//});

//function plus(A, B) {
//    return 2;
//}
//
//it('should add "one" and "one"', function () {
//    assert.equal(plus("one", "one"), 2);
//    });

//function plus(A, B) {
//    return 4;
//}
//
//it('should add "two" and "two"', function () {
//    assert.equal(plus("two", "two"), 4);
//});

//function plus(A, B) {
//    return 6;
//}
//
//it('should add "three" and "three"', function () {
//    assert.equal(plus("three", "three"), 6);
//});

//function plus (A, B) {
//    return 8;
//}
//
//it('should add "four" and "four"', function () {
//    assert.equal(plus("four", "four"), 8);
//});

//function plus(A, B) {
//    return 10;
//}
//
//it('should add "five" and "five"', function () {
//    assert.equal(plus("five", "five"), 10);
//});

//the following is the code David reviewed in class 01-25-15
//function plus (A, B) {
//    var x;
//    var y;
//    
//    
//    if (A == 'zero') {
//        return 