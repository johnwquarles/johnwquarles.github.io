angular.module('app.controllers')

.controller('Header', function (Ajax, $timeout, usSpinnerService) {
  // would be more simple to just ng-show the spinner according
  // to presence of codewars data, but I wonder if the CPU doesn't continue
  // to have to spend resources on it after it's hidden.
  // no reason for that, so I've done the below.

  // $timeout: https://github.com/urish/angular-spinner/issues/26

  var vm = this;
  vm.loading = true;

  $timeout(function() {
    usSpinnerService.spin('codewars');
  }, 0);

  Ajax.getMyData(function(err, data) {
    vm.myData = data;
    endLoading();
  });
  Ajax.getOutOf(function(err, data) {
    var outOf = commafy(data.totalCompleted);
    vm.outOf = outOf;
    endLoading();
  })

  function endLoading() {
    if (vm.myData && vm.outOf) {
      usSpinnerService.stop('codewars');
      vm.loading = false;
    }
  }

  function commafy(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

})
