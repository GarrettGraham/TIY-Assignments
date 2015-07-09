
var app = angular.module('Timeline', []);

app.controller ('CommitsCtrl', ['$http', function($http){
  var self = this;

  $http.get(js/commits.json).success(function(data) {
    this.PushEvent = []; //get info from json?
    angular.forEach(data, function(PushEvent){
      this.PushEvent.push({
        text: PushEvent.commits.message
      });
    });
    console.log(this.commits.message);
  });
}
])
