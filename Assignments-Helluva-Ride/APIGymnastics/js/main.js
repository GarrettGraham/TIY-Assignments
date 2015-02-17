

//<!-- Jared's code below: i want to use it as a reference and dissect it


//var _ = require('lodash');
//var events = require('./github/users/jaredstevick/events.json');
//var assert = require('assert');
//
//var pushEvents = events.filter(function(item){
//	return item.type == 'PushEvent'
//});
//
//var pullRequests = events.filter(function(item){
//    return item.type == 'PullRequestEvent';
//});
//
//var issueComment = events.filter(function(item){
//    return item.type == 'IssueCommentEvent';
//});
//
//var createEvent = events.filter(function(item){
//	return item.type == 'CreateEvent'
//});
//
//var otherEvents = events.filter(function(item){
//	return item.type != 'PushEvent'
//});
//
////when did all this happen
//function dateCreated(a){ 
//	return _.map(a, 'created_at')
//};
//
////thanks taylor, this totally works
//function findSpan(a, b){
//	return _.first(a).substring(0, 10).localeCompare(_.last(b).substring(0, 10)) + 1;
//}
//
////now find the average
//function avg(item) {
//	var diff = findSpan(dateCreated(events), dateCreated(events));
//	return item.length / diff
//}
//
//function theAnswer(){
//   	return {
//    'total': events.length,
//    'PushEvent': {
//    	'total': pushEvents.length,
//       	'perDay': avg(pushEvents)
//    },
//    'PullRequests': {
//    	'total': pullRequests.length,
//    	'perDay': avg(pullRequests)
//    },
//    'IssueComment': {
//    	'total': issueComment.length,
//    	'perDay': avg(issueComment)
//    },
//	'CreateEvents': {
//		'total': createEvent.length,
//		'perDay': avg(createEvent)
//	},
//     'OtherEvents': {
//       'total': otherEvents.length,
//       'perDay': avg(otherEvents)
//     }
//   };
// }; // END answer 
//
//it('should have 30 total events', function() {
//    assert(events.length === 30);
//    });
//
//it('should have 14 `PushEvent` entries', function(){
//    assert(pushEvents.length === 14);
//    });
//
//console.log(events.length);
//console.log(pushEvents.length);
//console.log(pullRequests.length);
//console.log(issueComment.length);
//console.log(otherEvents.length);
//console.log(dateCreated(events));
//console.log(theAnswer(events));
//-->
//



var events = require('../apis/users/GarrettGraham/events2.json'); // Understand the syntax!!

var pushEvents = events.filter(function(item) {
    return item.type = 'PushEvent'
});

var pullRequests = events.filter(function(item) {
    return item.type = 'PullRequestEvent'
});

var createEvent = events.filter(function(item) {
    return item.type = 'CreateEvent'
});

var issueComment = events.filter(function(item) {
    return item.type = 'IssueCommentEvent'
});

var otherEvent = events.filter(function(item) {
    return item.type != 'PushEvent'
});


//var repos = events.filter(function(item) {
//    return item.repo = 'repo'
//});

function answer(){
  return {
    'total': events.length,  // How many total events did you fetch?
      'PushEvent':
      {
        'total': PushEvent.length, // How many total events of type `PushEvent` are there?
        'perDay': avg(pushEvents) // On average, how many`PushEvent` entries per day?
    },
    'PullRequests': 
      { 
        'total': pullRequests.length,
        'perDay': avg(pullRequests)
    },
    'CreateEvent':
      {
        'total': createEvent.length,
        'perDay': avg(createEvent)
    },
    'IssueComment':
      {
        'total': issueComment.length,
        'perDay': avg(issueEvent)
      },
      
    'other': {
      'total': otherEvent.length,  // How many _other_ events are in the data?
      'perDay': avg(otherEvent)  // How many per day, on average?
    }
    };
}

// First Test: total events

it('should have 30 total events'), function() {
      assert(events.length === 30);
}

it('should have 14 push events'), function () {
    assert(pushEvents.length === 14);
}

console.log(pushEvents.length);
console.log(pullRequests.length);
console.log(createEvent.length);
console.log(issueComment.length);
console.log(otherEvent.length);



 //### Format for _Reading JavaScript_
                //
                //----
                //### Literal: `Array`
                //. . .
                //
                //#### Iterator Methods
                //
                //##### `Array.prototype.every`
                //
                ////* _params:_
                ////  * `callback`: `Function` to test each element against
                ////    * _params:_
                //      * `item`: element to process
                //      * `index`: index of processed element
                //      * `all`: array instance
                //    * _returns:_ `Boolean`
                //  * `thisArg`: `Object` to which to bind `callback`
                //* _returns:_ `Boolean` whether `callback` returns `true` for _every_ element
                //* _example:_

            //console.log(events.length);      
            //
            //function every(anArray, callback){
            //  var hasFailed = false; // it hasn't has it?
            //
            //  // iterate...
            //  anArray.foreach(function(item, index, all){
            //    if ( hasFailed ) return; // one failure ruins everything...
            //
            //    hasFailed = !callback(item, index, all); // why invert here?
            //  });
            //
            //  return !hasFailed; // Another inverse?
            //  // What if `anArray` is empty?
            //}


var pushEvents = events.filter(function(item) {
    return item.type = 'PushEvent'
});

var pullRequests = events.filter(function(item) {
    return item.type = 'PullRequests'
});

var issueComment = events.filter(function(item) {
    return item.type = 'IssueComment'
});

function answer() {
    return {
        'total': events.length,
            'PushEvent': 
        {
            'total': pushEvents.length,
            'perDay': avg/(pushEvents)  //need to understand how the avg works!!
        }
        
    
    }

}
       




