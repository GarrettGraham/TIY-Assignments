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

function wordToInt(word) {
    word = word.toLowerCase ();
    
    if(word == 'one') {
        return 1;
    }
    
    else if (word == 'zero') {
        return 0;
    }
    
    else if (word == 'two') {
        return 2;
    }
    
    else if (word == 'three') {
        return 3;
    }
    
    else if (word == 'four') {
        return 4;
    }
    
    else if (word == 'five') {
        return 5;
    }
    
    else if (word == 'six') {
        return 6;
    }
    
    else if (word == 'seven') {
        return 7;
    }
    
    assert(plus("zero","zero") === 0);
    assert(plus("one", "one") === 1);
    assert(plus("two", "two") === 2);
    assert
    
    
    
    
assert(plus("one", "one") === 2);

