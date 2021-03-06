'use strict';

angular.module('app.factories').factory('Colors', function () {
  return {
    randomColor: function randomColor() {
      return '#' + Math.floor(Math.random() * Math.pow(16, 6)).toString(16);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbG9yc0ZhYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBRTlCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsWUFBVztBQUM1QixTQUFPO0FBQ0wsZUFBVyxFQUFBLHVCQUFHO0FBQ1osYUFBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDckU7R0FDRixDQUFBO0NBQ0YsQ0FBQyxDQUFBIiwiZmlsZSI6IkNvbG9yc0ZhYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAuZmFjdG9yaWVzJylcblxuLmZhY3RvcnkoJ0NvbG9ycycsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJhbmRvbUNvbG9yKCkge1xuICAgICAgcmV0dXJuIFwiI1wiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKk1hdGgucG93KDE2LCA2KSkudG9TdHJpbmcoMTYpO1xuICAgIH1cbiAgfVxufSlcbiJdfQ==
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJDb2xvcnNGYWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcC5mYWN0b3JpZXMnKVxuXG4uZmFjdG9yeSgnQ29sb3JzJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmFuZG9tQ29sb3IoKSB7XG4gICAgICByZXR1cm4gXCIjXCIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqTWF0aC5wb3coMTYsIDYpKS50b1N0cmluZygxNik7XG4gICAgfVxuICB9XG59KVxuIl0sImZpbGUiOiJDb2xvcnNGYWMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==