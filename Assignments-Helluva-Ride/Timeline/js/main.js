
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
    });

  });
}])

// app.controller ('CommitsController', ['$http',
// function($http){
//   $http.get('js/commits.json').success(function(data){
//     console.log(data)
//     this.data = data[0].payload.commits;
//     console.log(data[0].payload.commits)
//     this.commitArray = [];
//     angular.forEach(this.data, function(commit, index){
//       console.log(commit)
//       this.commitArray.push({
//         text: commit.message
//       })
//     });
//   });
// }
// ])
