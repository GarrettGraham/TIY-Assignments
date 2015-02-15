//### String Calculator Kata
//
//Provide a function called `plus` that accepts two `String` arguments that should always be English number words (e.g. one, two, three) and returns a `Number` representing the sum. Use your new `it()` and `describe()` robots from `mocha`. For example:

//javascript


var assert = require('assert');

var number = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
}

function plus(a, b){
return number[a] + number [b];  
}

it('should add "zero" and "zero"', function(){
  assert.equal(plus("zero", "zero"), 0);
});

it('should add "zero" and "one"', function(){
  assert.equal(plus("zero", "one"), 1);
});

it('should add "zero" and "two"', function() {
    assert.equal(plus("zero", "two"), 2);
});

it('should add "zero" and "three"', function() {
    assert.equal(plus("zero", "three"), 3);
});

it('should add "zero" and "four"', function() {
    assert.equal(plus("zero", "four"), 4);
});

it('should add "zero" and "five"', function() {
    assert.equal(plus("zero", "five"), 5);
});

it('should add "zero" and "six"', function() {
    assert.equal(plus("zero", "six"), 6);
});

it('should add "zero" and "seven"', function() {
    assert.equal(plus("zero", "seven"), 7);
});

it('should add "zero" and "eight"', function() {
    assert.equal(plus("zero", "eight"), 8);
});
it('should add "zero" and "nine"', function() {
    assert.equal(plus("zero", "nine"), 9);
});
it('should add "zero" and "ten"', function() {
    assert.equal(plus("zero", "ten"), 10);
}); 


/* one and [number] */

it('should add "one" and "zero"', function() {
    assert.equal(plus("one", "zero"), 1);
});

it('should add "one" and "one"', function() {
    assert.equal(plus("one", "one"), 2);
});

it('should add "one" and "two"', function() {
    assert.equal(plus("one", "two"), 3);
});

it('should add "one" and "three"', function() {
    assert.equal(plus("one", "three"), 4);
});

it('should add "one" and "four"', function() {
    assert.equal(plus("one", "four"), 5);
});

it('should add "one" and "five"', function() {
    assert.equal(plus("one", "five"), 6);
});

it('should add "one" and "six"', function() {
    assert.equal(plus("one", "six"), 7);
});

it('should add "one" and "seven"', function() {
    assert.equal(plus("one", "seven"), 8);
});

it('should add "one" and "eight"', function() {
    assert.equal(plus("one", "eight"), 9);
});

it('should add "one" and "nine"', function() {
    assert.equal(plus("one", "nine"), 10);
});

it('should add "one" and "ten"', function() {
    assert.equal(plus("one", "ten"), 11);
});

//* Provide test cases for `"zero"` through `"ten"`
//* Just use `if` and `return` statements
//* You may need to read about [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

