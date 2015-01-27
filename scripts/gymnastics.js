var assert = require('assert');
var events = require('../apis/users/GarrettGraham/events.json');



it('should tell us that the event has an input', function () {
    assert(events);
});


function answer () {
    return {
        'total':events.length,
        'PushEvent': {
        
        }
    }
};

console.log(events.length)
var theAnswer = answer();

it('should return that answer exists', function () {
    assert(answer);
    assert(events.length === 30);
});

it('should return the length when calling answer function', function () {
   assert.equal(theAnswer.total, 30);
});

it('should have "PushEvent"', function() {
   assert(theAnswer.PushEvent); 
});
   

//function answer() {
//        return {
//            'total':
//            'PushEvent': {
//                'total':
//            'perDay':
//        }'
//        'other': {
//            'total':
//            'perDay':
//        }
//    };
//}










//var assert = require('assert');
//
//var events = require('../apis/users/GarrettGraham/events.json');
//
////assert(events.length);
//
//function answer() {
//    var firstEvent = events[0];
//    var numberOfPushEvents = 0;
//    
//    events.forEach(function(item, index, all) {
//
//        if (item.type == "PushEvent"){
//            numberOfPushEvents++;
//        }
//    });
//    
//    events.filter(function(item) {
//        return item.type == 'PushEvent;
//    });
//    
//    pushEvents.length == numberOfPushEvents;
//    
//    while ( index < events.length) {   // while is a keyword for a loop
//        var event = events[index];     // event is always === 30. the index
//                                       // less than events.length is the                                            // THRESHOLD. Its a FINITE Loop
//    }
////    
////    if (firstEvent.type == "PushEvent") {
////        numberOfPushEvents = numberOfPushEvents + 1;
////        numberOfPushEvents++ //++ is the incrementation of adding 1
////    }
////    
////    var secondEvent = events[1];
////        if (secondEvent.type == "PushEvent" ) {
////            numberOfPushEvents++;
////        }
////    
////    var thirdEvent = events[2];
////    
////    return {
////        'total': events.length;
////        'PushEvents': {
////            'total':
////    }
////    } //end of answer
////}
////describe('the setup', function(){
////    it('should have events', function() {
////    assert(events);
////    });
////    
////    it('should have an `answer` function', function() {
////        assert(answer);
////        assert(typeof answer == 'function');
////    });
////});
////
////describe('the answer', function() {
////    var theAnswer = answer(); //this is the result of the function answer
//                              // the parentheses is an `answer invocation`
//    
////    it('should have 30 total events', function() {
////    assert.equal(theAnswer.total, 30);
////           });
//    
////function answers () {
////    return {
////        'total': events.length;
////        'PushEvent': {
////        'total':
////        'perDay':
////        },
////        'other': {
////        'total':
////        'perDay':
////        }
////    };
////}
//    
////    assert(events);
////    assert(answer);
////    assert(typeof answer == 'function');
////        
////    var theAnswer = answer(); 
////        
////    assert.equal(theAnswe.total, 30); //I assert that the key "total" in variable "theAnswer" is equal to Number 30
////    
////    assert(theAnswer.PushEvents);
////    
////    assert(theAnswer.PushEvents.total);