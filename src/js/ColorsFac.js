angular.module('app.factories')

.factory('Colors', function() {
  return {
    randomColor() {
      return "#" + Math.floor(Math.random()*Math.pow(16, 6)).toString(16);
    }
  }
})
