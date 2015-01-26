var assert = require('assert');

/* ---- pair programming ---- */

//can check the validity of a test and if it's working with a generic function or a console.log command

console.log(date());

//it('should totally fail', function () {
//    assert(false);
//});

function plus (a, b) {
    return a + b;
}

it('should have a function called `plus`', function () {
    assert.equal(plus);
    assert(typeof plus =='function');
});

it('should take "zero"', function() {
    assert.equal(plus("zero", "zero"), 0;
});
    
it('should take "one"', function (){
    assert.equal(plus("zero","one"), 1);
});