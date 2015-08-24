angular.module('app.factories')

.factory('Ajax', function($http) {
  var codewarsUrl = 'https://cryptic-hamlet-1630.herokuapp.com/codewars';
  return {
    getCodewars(cb) {
      $http.get(codewarsUrl).then(function(res) {
        console.log(res.data);
        cb(null, res.data);
      }, function(err) {
        cb(err);
      })
    }
  }
})
