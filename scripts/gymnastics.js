var assert = require('assert'),
_ = require ('lodash'),
events = require('../apis/users/GarrettGraham/events.json');

//var pushEvents = events.filter(function(event) {
//    return event.type == 'PushEvents';
//});

var pushEvents = _.filter(events, {
    'type': 'PushEvent'
});

var first = _.first(events),
    last = _.last(events)


function answer() {
    return { 
        'total': events.length
        'PushEvent': { 
            'total': pushEvents.length, 
    },
/* //   'total':
        'perDay':
} // */
};
}
it('should be setup', function() {
    assert(events);
    assert(answer);
    assert(anAnswer);

    assert(Array.isArray(events));
    assert.equal(typeof answer, 'function');
    assert.equal(typeof anAnswer, 'object');
});


it('should have 30 `events`', function () {
    assert.equal(events.length, 30);
});

it('should have 14 `PushEvent`', function () {
   assert.equal(anAnswer.PushEvent.total, 14);
});

it('should have some `perDay` stats?', function() {
    assert(first);
    assert(last);
    
    assert(first.created_at);
    assert(last.created_at);
    console.log(first.created_at);
    console.log(last.created_at);
});
