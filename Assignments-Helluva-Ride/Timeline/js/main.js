var app = angular.module('Timeline', []);

app.controller ('CommitsCtrl', ['$scope', '$http',
function($scope, $http){
  $http.get('js/commits.json').success(function(data){
    $scope.pushevents = [];
    console.log(data)
    angular.forEach(data, function(pushevent){
      $scope.pushevents.push(pushevent.payload);
      console.log(pushevent.payload.commits)
    });

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
