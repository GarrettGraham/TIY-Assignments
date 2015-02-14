//### String Calculator Kata
//
//Provide a function called `plus` that accepts two `String` arguments that should always be English number words (e.g. one, two, three) and returns a `Number` representing the sum. Use your new `it()` and `describe()` robots from `mocha`. For example:

//javascript


var assert = require('assert');

var number = {
    one: 1,
    two: 2,
    three: 3
}
function plus(a, b){
return number[a] + number [b];  
}

it('should add "one" and "one"', function(){
  assert.equal(plus("one", "one"), 2);
});


//* Provide test cases for `"zero"` through `"ten"`
//* Just use `if` and `return` statements
//* You may need to read about [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

