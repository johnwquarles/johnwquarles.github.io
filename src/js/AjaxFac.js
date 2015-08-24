angular.module('app.factories')

.factory('Ajax', function($http) {
  var codewarsUrl = 'https://cryptic-hamlet-1630.herokuapp.com/';
  var dataRoute = 'codewarsJQ';
  var outOfRoute = 'outOf';
  return {

    getMyData(cb) {
      $http.get(codewarsUrl + dataRoute).then(function(res) {
        console.log(res.data);
        cb(null, res.data);
      }, function(err) {
        cb(err);
      })
    },

    getOutOf(cb) {
      $http.get(codewarsUrl + outOfRoute).then(function(res) {
        console.log(res.data);
        cb(null, res.data);
      }, function(err) {
        cb(err);
      })
    }

  }
})
