'use strict';

angular.module('app.controllers').controller('Header', function (Ajax, $scope, $timeout, usSpinnerService) {
  // would be more simple to just ng-show the spinner according
  // to presence of codewars data, but I wonder if the CPU doesn't continue
  // to have to spend resources on it after it's hidden.
  // no reason for that, so I've done the below.

  // $timeout: https://github.com/urish/angular-spinner/issues/26
  $timeout(function () {
    usSpinnerService.spin('codewars');
  }, 0);

  Ajax.getMyData(function (err, data) {
    $scope.myData = data;
    endSpinner();
  });
  Ajax.getOutOf(function (err, data) {
    var outOf = commafy(data.totalCompleted);
    $scope.outOf = outOf;
    endSpinner();
  });

  function endSpinner() {
    if ($scope.myData && $scope.outOf) {
      usSpinnerService.stop('codewars');
    }
  }

  function commafy(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhlYWRlckN0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBRWhDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTs7Ozs7OztBQU94RSxVQUFRLENBQUMsWUFBVztBQUNsQixvQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7R0FDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFTixNQUFJLENBQUMsU0FBUyxDQUFDLFVBQVMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNqQyxVQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNyQixjQUFVLEVBQUUsQ0FBQztHQUNkLENBQUMsQ0FBQztBQUNILE1BQUksQ0FBQyxRQUFRLENBQUMsVUFBUyxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQ2hDLFFBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekMsVUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDckIsY0FBVSxFQUFFLENBQUM7R0FDZCxDQUFDLENBQUE7O0FBRUYsV0FBUyxVQUFVLEdBQUc7QUFDcEIsUUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDakMsc0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ25DO0dBQ0Y7O0FBRUQsV0FBUyxPQUFPLENBQUMsQ0FBQyxFQUFFO0FBQ2hCLFdBQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztHQUM3RDtDQUVGLENBQUMsQ0FBQSIsImZpbGUiOiJIZWFkZXJDdHJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycpXG5cbi5jb250cm9sbGVyKCdIZWFkZXInLCBmdW5jdGlvbiAoQWpheCwgJHNjb3BlLCAkdGltZW91dCwgdXNTcGlubmVyU2VydmljZSkge1xuICAvLyB3b3VsZCBiZSBtb3JlIHNpbXBsZSB0byBqdXN0IG5nLXNob3cgdGhlIHNwaW5uZXIgYWNjb3JkaW5nXG4gIC8vIHRvIHByZXNlbmNlIG9mIGNvZGV3YXJzIGRhdGEsIGJ1dCBJIHdvbmRlciBpZiB0aGUgQ1BVIGRvZXNuJ3QgY29udGludWVcbiAgLy8gdG8gaGF2ZSB0byBzcGVuZCByZXNvdXJjZXMgb24gaXQgYWZ0ZXIgaXQncyBoaWRkZW4uXG4gIC8vIG5vIHJlYXNvbiBmb3IgdGhhdCwgc28gSSd2ZSBkb25lIHRoZSBiZWxvdy5cblxuICAvLyAkdGltZW91dDogaHR0cHM6Ly9naXRodWIuY29tL3VyaXNoL2FuZ3VsYXItc3Bpbm5lci9pc3N1ZXMvMjZcbiAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgdXNTcGlubmVyU2VydmljZS5zcGluKCdjb2Rld2FycycpO1xuICB9LCAwKTtcblxuICBBamF4LmdldE15RGF0YShmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAkc2NvcGUubXlEYXRhID0gZGF0YTtcbiAgICBlbmRTcGlubmVyKCk7XG4gIH0pO1xuICBBamF4LmdldE91dE9mKGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgIHZhciBvdXRPZiA9IGNvbW1hZnkoZGF0YS50b3RhbENvbXBsZXRlZCk7XG4gICAgJHNjb3BlLm91dE9mID0gb3V0T2Y7XG4gICAgZW5kU3Bpbm5lcigpO1xuICB9KVxuXG4gIGZ1bmN0aW9uIGVuZFNwaW5uZXIoKSB7XG4gICAgaWYgKCRzY29wZS5teURhdGEgJiYgJHNjb3BlLm91dE9mKSB7XG4gICAgICB1c1NwaW5uZXJTZXJ2aWNlLnN0b3AoJ2NvZGV3YXJzJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29tbWFmeSh4KSB7XG4gICAgICByZXR1cm4geC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgfVxuXG59KVxuIl19
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJIZWFkZXJDdHJsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnKVxuXG4uY29udHJvbGxlcignSGVhZGVyJywgZnVuY3Rpb24gKEFqYXgsICRzY29wZSwgJHRpbWVvdXQsIHVzU3Bpbm5lclNlcnZpY2UpIHtcbiAgLy8gd291bGQgYmUgbW9yZSBzaW1wbGUgdG8ganVzdCBuZy1zaG93IHRoZSBzcGlubmVyIGFjY29yZGluZ1xuICAvLyB0byBwcmVzZW5jZSBvZiBjb2Rld2FycyBkYXRhLCBidXQgSSB3b25kZXIgaWYgdGhlIENQVSBkb2Vzbid0IGNvbnRpbnVlXG4gIC8vIHRvIGhhdmUgdG8gc3BlbmQgcmVzb3VyY2VzIG9uIGl0IGFmdGVyIGl0J3MgaGlkZGVuLlxuICAvLyBubyByZWFzb24gZm9yIHRoYXQsIHNvIEkndmUgZG9uZSB0aGUgYmVsb3cuXG5cbiAgLy8gJHRpbWVvdXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS91cmlzaC9hbmd1bGFyLXNwaW5uZXIvaXNzdWVzLzI2XG4gICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHVzU3Bpbm5lclNlcnZpY2Uuc3BpbignY29kZXdhcnMnKTtcbiAgfSwgMCk7XG5cbiAgQWpheC5nZXRNeURhdGEoZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgJHNjb3BlLm15RGF0YSA9IGRhdGE7XG4gICAgZW5kU3Bpbm5lcigpO1xuICB9KTtcbiAgQWpheC5nZXRPdXRPZihmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICB2YXIgb3V0T2YgPSBjb21tYWZ5KGRhdGEudG90YWxDb21wbGV0ZWQpO1xuICAgICRzY29wZS5vdXRPZiA9IG91dE9mO1xuICAgIGVuZFNwaW5uZXIoKTtcbiAgfSlcblxuICBmdW5jdGlvbiBlbmRTcGlubmVyKCkge1xuICAgIGlmICgkc2NvcGUubXlEYXRhICYmICRzY29wZS5vdXRPZikge1xuICAgICAgdXNTcGlubmVyU2VydmljZS5zdG9wKCdjb2Rld2FycycpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbW1hZnkoeCkge1xuICAgICAgcmV0dXJuIHgudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gIH1cblxufSlcbiJdLCJmaWxlIjoiSGVhZGVyQ3RybC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9