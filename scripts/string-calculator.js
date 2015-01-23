var assert = require('assert');

function plus(A, B) {
    return 1;
}

it('should add "zero" and "one"', function () {
    assert.equal(plus("zero", "one"), 2);
});

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