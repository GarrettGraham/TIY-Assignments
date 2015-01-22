var assert = require('assert');

function add (a, b) {
	return (a + b); 
}

as
assert(add(3, 4) === 7)

function diff (a, b) {
    return (a - b)
}

assert(diff(12,-5) === 17)

function prod (a, b) {
    return (a * b)
}

assert(prod(4, 9) === 36)

function div (a, b) {
    return (a / b)
}

assert(div(3,2) === 1.5)


assert(plus("one", "one") === 2);

if ("one" = 1) {
    return true
} else {
    return false}