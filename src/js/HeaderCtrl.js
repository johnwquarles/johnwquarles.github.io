angular.module('app.controllers')

.controller('Header', function (Ajax, $scope) {

  Ajax.getMyData(function(err, data) {
    $scope.myData = data;
  });
  Ajax.getOutOf(function(err, data) {
    var outOf = commafy(data.totalCompleted);
    $scope.outOf = outOf;
  })

  function commafy(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

})
