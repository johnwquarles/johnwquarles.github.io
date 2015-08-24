angular.module('app.controllers')

.controller('Header', function (Ajax, $scope) {
  Ajax.getCodewars(function(err, data) {
    $scope.codewars = data;
  });
})
