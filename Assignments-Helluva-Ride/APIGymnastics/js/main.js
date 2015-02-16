
               




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
//      'perDay': avg(pushEvents) // On average, how many`PushEvent` entries per day?
    },
    'other': {
      'total': repo.length,  // How many _other_ events are in the data?
//      'perDay': avg(repos)  // How many per day, on average?
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


