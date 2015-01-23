var assert = require('assert') 

function (A, B) {
    return A + B;
}

it('should add "one" and "one"', function () {
    assert.equal(plus('"one", "one"), 2);
    });