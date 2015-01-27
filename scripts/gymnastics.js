var assert = require('assert');

var events = require('../apis/users/GarrettGraham/events.json');

assert(events.length);

function answer() {
    return {
        'total': events.length}
} //end of answer

describe('the setup', function(){
    it('should have events', function() {
    assert(events);
    });
    
    it('should have an `answer` function', function() {
        assert(answer);
        assert(typeof answer == 'function');
    });
});

describe('the answer', function() {
    var theAnswer = answer();
    
    it('should have 30 total events', function() {
    assert.equal(theAnswer.total, 30);
           });
    
//function answers () {
//    return {
//        'total':
//        'PushEvent': {
//        'total':
//        'perDay':
//        },
//        'other': {
//        'total':
//        'perDay':
//        }
//    };
//}