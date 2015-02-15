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

/* addition */

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


/* subtraction */

function subtract(a, b) {
    return number[a] - number [b];
}


it('should subtract "zero" and "zero"', function(){
  assert.equal(subtract("zero", "zero"), 0);
});

it('should subtract "zero" and "one"', function(){
  assert.equal(subtract("zero", "one"), -1);
});

it('should subtract "zero" and "two"', function() {
    assert.equal(subtract("zero", "two"), -2);
});

it('should subtract "zero" and "three"', function() {
    assert.equal(subtract("zero", "three"), -3);
});

it('should subtract "zero" and "four"', function() {
    assert.equal(subtract("zero", "four"), -4);
});

it('should subtract "zero" and "five"', function() {
    assert.equal(subtract("zero", "five"), -5);
});

it('should subtract "zero" and "six"', function() {
    assert.equal(subtract("zero", "six"), -6);
});

it('should subtract "zero" and "seven"', function() {
    assert.equal(subtract("zero", "seven"), -7);
});

it('should subtract "zero" and "eight"', function() {
    assert.equal(subtract("zero", "eight"), -8);
});
it('should subtract "zero" and "nine"', function() {
    assert.equal(subtract("zero", "nine"), -9);
});
it('should subtract "zero" and "ten"', function() {
    assert.equal(subtract("zero", "ten"), -10);
}); 

            /* one and [number] */

it('should subtract "one" and "zero"', function() {
    assert.equal(subtract("one", "zero"), 1);
});

it('should subtract "one" and "one"', function() {
    assert.equal(subtract("one", "one"), 0);
});

it('should subtract "one" and "two"', function() {
    assert.equal(subtract("one", "two"), -1);
});

it('should subtract "one" and "three"', function() {
    assert.equal(subtract("one", "three"), -2);
});

it('should subtract "one" and "four"', function() {
    assert.equal(subtract("one", "four"), -3);
});

it('should subtract "one" and "five"', function() {
    assert.equal(subtract("one", "five"), -4);
});

it('should subtract "one" and "six"', function() {
    assert.equal(subtract("one", "six"), -5);
});

it('should subtract "one" and "seven"', function() {
    assert.equal(subtract("one", "seven"), -6);
});

it('should subtract "one" and "eight"', function() {
    assert.equal(subtract("one", "eight"), -7);
});

it('should subtract "one" and "nine"', function() {
    assert.equal(subtract("one", "nine"), -8);
});

it('should subtract subtract"one" and "ten"', function() {
    assert.equal(subtract("one", "ten"), -9);
});


/* multiplication */


function multiply(a, b) {
    return number[a] * number [b];
}


it('should multiply "zero" and "zero"', function(){
  assert.equal(multiply("zero", "zero"), 0);
});
it('should multiply "zero" and "one"', function(){
  assert.equal(multiply("zero", "one"), 0);
});
it('should multiply "zero" and "two"', function(){
  assert.equal(multiply("zero", "two"), 0);
});
it('should multiply "zero" and "three"', function(){
  assert.equal(multiply("zero", "three"), 0);
});
it('should multiply "zero" and "four"', function(){
  assert.equal(multiply("zero", "four"), 0);
});
it('should multiply "zero" and "five"', function(){
  assert.equal(multiply("zero", "five"), 0);
});
it('should multiply "zero" and "five"', function(){
  assert.equal(multiply("zero", "five"), 0);
});
it('should multiply "zero" and "six"', function(){
  assert.equal(multiply("zero", "six"), 0);
});
it('should multiply "zero" and "seven"', function(){
  assert.equal(multiply("zero", "seven"), 0);
});
it('should multiply "zero" and "eight"', function(){
  assert.equal(multiply("zero", "eight"), 0);
});
it('should multiply "zero" and "nine"', function(){
  assert.equal(multiply("zero", "nine"), 0);
});
it('should multiply "zero" and "ten"', function(){
  assert.equal(multiply("zero", "ten"), 0);
});

            /* one and [number] */

it('should multiply "one" and "zero"', function() {
    assert.equal(multiply("one", "zero"), 0);
});

it('should multiply "one" and "one"', function() {
    assert.equal(multiply("one", "one"), 1);
});

it('should multiply "one" and "two"', function() {
    assert.equal(multiply("one", "two"), 2);
});

it('should multiply "one" and "three"', function() {
    assert.equal(multiply("one", "three"), 3);
});

it('should multiply "one" and "four"', function() {
    assert.equal(multiply("one", "four"), 4);
});

it('should multiply "one" and "five"', function() {
    assert.equal(multiply("one", "five"), 5);
});

it('should multiply "one" and "six"', function() {
    assert.equal(multiply("one", "six"), 6);
});

it('should multiply "one" and "seven"', function() {
    assert.equal(multiply("one", "seven"), 7);
});

it('should multiply "one" and "eight"', function() {
    assert.equal(multiply("one", "eight"), 8);
});

it('should multiply "one" and "nine"', function() {
    assert.equal(multiply("one", "nine"), 9); 
});

it('should multiply "one" and "ten"', function() {
    assert.equal(multiply("one", "ten"), 10);
});


/* division */

function divide(a, b) {
    return number[a] / number[b];
}

// ??how do you return undefined for dividing by zero??

//it('should divide "zero" and "zero"', function() {
//    assert.equal(divide("zero", "zero"), "undefined");
//});

//it('should divide "one" and "zero"', function() {
//   assert.equal(divide("one", "zero"), ????); 
//});

it('should divide "one" and "one"', function() {
    assert.equal(divide("one", "one"), 1);
});

it('should divide "one" and "two"', function() {
    assert.equal(divide("one", "two"), 1/2);
});

it('should divide "one" and "three"', function() {
    assert.equal(divide("one", "three"), 1/3);
});

it('should divide "one" and "four"', function() {
    assert.equal(divide("one", "four"), 1/4);
});

it('should divide "one" and "five"', function() {
    assert.equal(divide("one", "five"), 1/5);
});

it('should divide "one" and "six"', function() {
    assert.equal(divide("one", "six"), 1/6);
});

it('should divide "one" and "seven"', function() {
    assert.equal(divide("one", "seven"), 1/7);
});

it('should divide "one" and "eight"', function() {
    assert.equal(divide("one", "eight"), 1/8);
});

it('should divide "one" and "nine"', function() {
    assert.equal(divide("one", "nine"), 1/9);
});

it('should divide "one" and "one"', function() {
    assert.equal(divide("one", "ten"), 1/10);
});


//* Provide test cases for `"zero"` through `"ten"`
//* Just use `if` and `return` statements
//* You may need to read about [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

