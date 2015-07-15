var app = angular.module('Timeline', []);

// the jquery for the popover on the nav links
$(document).ready(function() {
  $('[data-toggle="popover"]').popover();
});

// bind the json data with the view
app.controller ('CommitsCtrl', ['$scope', '$http',
function($scope, $http){
  $http.get('js/commits.json').success(function(data){
    console.log(data)
    $scope.data = data[0].payload.commits;
    $scope.commitArray = [];
    angular.forEach($scope.data, function(commit, index){
      console.log(commit)
      $scope.commitArray.push({
      text: commit.message,
      name: commit.author.name
    })
      // console.log(data.message)
    //   // $scope.data.payload = data.payload.commits;
    //   console.log(payload.commits[0])
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
