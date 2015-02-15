var assert = require('assert');

var number = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
}


function toEnglish(a) {
  return number[a]
}

it('should equal one', function(){
    assert.equal(toEnglish(1), "one");
});

it('should equal two', function() {
    assert.equal(toEnglish(2), "two");
});

it('should equal three', function() {
    assert.equal(toEnglish(3), "three");
});

it('should equal four', function() {
    assert.equal(toEnglish(4), "four");
});

it('should equal five', function() {
    assert.equal(toEnglish(5), "five");
});
//assert.equal(toEnglish(1), "one");
//assert.equal(toEnglish(2), "two");
