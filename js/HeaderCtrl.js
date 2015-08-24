'use strict';

angular.module('app.controllers').controller('Header', function (Ajax, $scope) {

  Ajax.getMyData(function (err, data) {
    $scope.myData = data;
  });
  Ajax.getOutOf(function (err, data) {
    var outOf = commafy(data.totalCompleted);
    $scope.outOf = outOf;
  });

  function commafy(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhlYWRlckN0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBRWhDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxJQUFJLEVBQUUsTUFBTSxFQUFFOztBQUU1QyxNQUFJLENBQUMsU0FBUyxDQUFDLFVBQVMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNqQyxVQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztHQUN0QixDQUFDLENBQUM7QUFDSCxNQUFJLENBQUMsUUFBUSxDQUFDLFVBQVMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNoQyxRQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDLFVBQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0dBQ3RCLENBQUMsQ0FBQTs7QUFFRixXQUFTLE9BQU8sQ0FBQyxDQUFDLEVBQUU7QUFDaEIsV0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0dBQzdEO0NBRUYsQ0FBQyxDQUFBIiwiZmlsZSI6IkhlYWRlckN0cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJylcblxuLmNvbnRyb2xsZXIoJ0hlYWRlcicsIGZ1bmN0aW9uIChBamF4LCAkc2NvcGUpIHtcblxuICBBamF4LmdldE15RGF0YShmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAkc2NvcGUubXlEYXRhID0gZGF0YTtcbiAgfSk7XG4gIEFqYXguZ2V0T3V0T2YoZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgdmFyIG91dE9mID0gY29tbWFmeShkYXRhLnRvdGFsQ29tcGxldGVkKTtcbiAgICAkc2NvcGUub3V0T2YgPSBvdXRPZjtcbiAgfSlcblxuICBmdW5jdGlvbiBjb21tYWZ5KHgpIHtcbiAgICAgIHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xuICB9XG5cbn0pXG4iXX0=
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJIZWFkZXJDdHJsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnKVxuXG4uY29udHJvbGxlcignSGVhZGVyJywgZnVuY3Rpb24gKEFqYXgsICRzY29wZSkge1xuXG4gIEFqYXguZ2V0TXlEYXRhKGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICRzY29wZS5teURhdGEgPSBkYXRhO1xuICB9KTtcbiAgQWpheC5nZXRPdXRPZihmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICB2YXIgb3V0T2YgPSBjb21tYWZ5KGRhdGEudG90YWxDb21wbGV0ZWQpO1xuICAgICRzY29wZS5vdXRPZiA9IG91dE9mO1xuICB9KVxuXG4gIGZ1bmN0aW9uIGNvbW1hZnkoeCkge1xuICAgICAgcmV0dXJuIHgudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gIH1cblxufSlcbiJdLCJmaWxlIjoiSGVhZGVyQ3RybC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9