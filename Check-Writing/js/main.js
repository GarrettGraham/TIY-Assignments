var assert = require('assert');

var number = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty-one",
    50: "fifty",
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

it('should equal six', function(){
    assert.equal(toEnglish(6), "six");
});

it('should equal seven', function() {
    assert.equal(toEnglish(7), "seven");
});

it('should equal eight', function() {
    assert.equal(toEnglish(8), "eight");
});

it('should equal nine', function() {
    assert.equal(toEnglish(9), "nine");
});

it('should equal ten', function() {
    assert.equal(toEnglish(10), "ten");
});

it('should equal eleven', function(){
    assert.equal(toEnglish(11), "eleven");
});

it('should equal twelve', function() {
    assert.equal(toEnglish(12), "twelve");
});

it('should equal thirteen', function() {
    assert.equal(toEnglish(13), "thirteen");
});

it('should equal fourteen', function() {
    assert.equal(toEnglish(14), "fourteen");
});

it('should equal fifteen', function() {
    assert.equal(toEnglish(15), "fifteen");
});

it('should equal sixteen', function(){
    assert.equal(toEnglish(16), "sixteen");
});

it('should equal seventeen', function() {
    assert.equal(toEnglish(17), "seventeen");
});

it('should equal eighteen', function() {
    assert.equal(toEnglish(18), "eighteen");
});

it('should equal nineteen', function() {
    assert.equal(toEnglish(19), "nineteen");
});

it('should equal twenty', function() {
    assert.equal(toEnglish(20), "twenty");
});

it('should equal twenty-one', function() {
    assert.equal(toEnglish(21), "twenty-one");
});

it('should equal fifty', function () {
   assert.equal(toEnglish(50), "fifty"); 
});
//assert.equal(toEnglish(1), "one");
//assert.equal(toEnglish(2), "two");
