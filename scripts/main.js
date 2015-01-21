var assert = require('assert');

function add (a, b) {
	return (a + b); 
}

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

