var app = window.angular.module('app', [])

app.factory('nameFetcher', nameFetcher)
app.controller('mainCtrl', mainCtrl)

function nameFetcher ($http) {

  var API_ROOT = 'names'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, nameFetcher, $http, $location) {

  $scope.names = []

  nameFetcher.get()
    .then(function (data) {
      $scope.names = data
    })

    $scope.addName = function() {
      var formData = {name: $scope.name};
      var nameURL = 'names';
      $http({
        url: nameURL,
        method: "POST",
        data: formData
      }).success(function(data, status, headers, config) {
        location.reload();
      }).error(function(data, status, headers, config) {
        console.log("Post failed");
      });
}
}