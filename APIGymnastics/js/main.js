
                //### One More Time...
                //
                //Think you've mastered the **String Calculator** and **Check Writing** katas? Not by a long-shot...! Refactor your "production" (i.e. not-"test") code to use `Array` ~~and `Object`~~ literals as Lists ~~and Dictionaries per the examples below.~~
                //
                //### Reading JavaScript: Array Iterators
                //
                //**Highly recommended BEFORE API Gymnastics**, document the _non-experimental_ [`Array` Iteration Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods) and attempt to re-implement _at least 3_ using `Array.prototype.forEach`. **BEAST MODE**: _Also include `find` and `findIndex`._ See **Requirements** below for an example of `every()`.
                //
                //### API Gymnastics: Floor Routines
                //
                //Use the `curl` command to get some crazy event data from the Github API and stick it in a file called `apis/github/users/USERNAME/events.json` where `USERNAME` is _your_ Github profile name, e.g. `apis/github/users/al-the-x/events.json` for moi: `al-the-x`. Yes, you'll have to create some empty directories along the way... Remember how to do it in one step? **Hint:** _Use the funnel, Luke!_ Following the **Requirements** below, use your iterator methods to pull some numbers from the data.

                //## Deliverables
                //
                //* _WIP Issue_ named `13 -- Lists+Dicts` with tasks _and estimates!_
                //* PR in `TIY-Assignments` from `feature/13--lists+dicts` to `master` with:
                //    * diagram of `toEnglish()` from `scripts/check-writing.js` in `docs/toEnglish.png`
                //    * more documentation in `docs/JS.md` for _non-experimental_ [Iteration Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods)
                //    * JSON file in `apis/github/users/USERNAME/events.json` (where `USERNAME` is _you_)
                //    * new file in `scripts/` called `gymnastics.js` with a function called `answers` that meets **Requirements**
                //
//=============================================================================================
//
//=============================================================================================

//---
//
//### API Gymnastics
//
//Use `curl` to fetch data from [the Github API](http://developer.github.com/v3), specifically [the public Events for a specific user](https://developer.github.com/v3/activity/events/#list-public-events-performed-by-a-user): **YOU!** Capture that data into a file called `apis/github/users/USERNAME/events.json` where `USERNAME` is _your_ Github account name, of course. **Hint:** You'll have to create all the directories along the way before you can create the file. When you've got 'em, it's time to _use_ 'em.
//
//Create a file called `scripts/gymnastics.js` and use the following incantation to get your cached API data into the file (again replacing `USERNAME`):

//Next, use the methods of `Array` that you've documented to uncover some statistics about your progress. You can create as many functions as you like to help you derive the answers, but place the final invocations (not just the values) into a function called `answers` that returns the following:
//

//=============================================================================================
//
//=============================================================================================

// END answer




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





var events = require('../apis/users/GarrettGraham/events2.json'); // Replace USERNAME!
var pushEvents = events.filter(function(item) {
    return item.type = 'PushEvent'
});

var repos = events.filter(function(item) {
    return item.repo = 'repo'
});

function answer(){
  return {
    'total': events.length,  // How many total events did you fetch?
      'PushEvent':
      {
      'total': PushEvent.length, // How many total events of type `PushEvent` are there?
      'perDay': avg(pushEvents) // On average, how many`PushEvent` entries per day?
    },
    'other': {
      'total': repo.length,  // How many _other_ events are in the data?
      'perDay': avg(repos)  // How many per day, on average?
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


//console.log(events.length);      
//      
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


