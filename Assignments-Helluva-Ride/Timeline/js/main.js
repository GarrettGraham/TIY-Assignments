var app = angular.module('Timeline', []);

// the jquery for the popover on the nav links
$(document).ready(function() {
  $('[data-toggle="popover"]').popover();
});

app.controller ('CommitsCtrl', ['$scope', '$http',
function($scope, $http){
  $http.get('js/commits.json').success(function(data){
    $scope.data = data;
    console.log(data)
    // angular.forEach(data[0], function(data){
    //     data[0].push(payload)
    //   console.log(data)
    // });

  });
}])
////app.controller ('CommitsCtrl', ['$http', function($http){
  ////var self = this;
    // this.PushEvents = [];
  ////$http.get('js/commits.json').success(function(data) {
      // self.PushEvents = []; //get info from json?
    ////self.data = data;
    ////console.log(data.payload)
      // angular.forEach(function(data){
      //   data.push(payload.commits)
      // });
      // self.PushEvents = data[0].payload.commits;

      // console.log(self.PushEvents[0].message);
      // angular.forEach(data[0].payload.commits, function(PushEvent){
      //   self.PushEvents.push(
      //     {text: PushEvent.message});
      //      });
      // console.log(self.PushEvents);
////   });
//// }
//// ])

// app.controller ('CommitsCtrl', ['$http', function($http){
//   var self = this;
//   $http.get('js/commits.json').success(function(data) {
//     self.PushEvents = data[0].payload.commits;
//     console.log(self.PushEvents[0].message);
//     angular.forEach(data[0].payload.commits, function(PushEvent){
//       self.PushEvents.push(
//         {text: PushEvent.message});
//          });
//     console.log(self.PushEvents);
//     });
//   }
//   ])

// app.controller ('CommitsCtrl', ['$scope', '$http',
// function($scope, $http) {
//   $http.get('js/commits.json').success(function(data){
//     $scope.PushEvents = [];
//     angular.forEach(data, function(PushEvent){
//       $scope.PushEvents.push( PushEvent.payload.commits.message)
//     });
//   console.log($scope.PushEvents.commits);
// });
// }
// ])
