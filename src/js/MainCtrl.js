angular.module('app.controllers')

.controller('Main', function (Colors, Features, Links, Contribs, $scope){
  var vm = this;
  var title = document.querySelector(".header h1");
  var randomColor = Colors.randomColor();
  var changeTime = 3000;
  var startTime;

  setInterval(function(){
    randomColor = Colors.randomColor();
  }, changeTime);

  title.style.color = randomColor;
  startTime = new Date().getTime();
  setInterval(function() {
    startTime = new Date().getTime();
    title.style.color = randomColor;
  }, changeTime)

  vm.iconColorChange = function() {
    var icons = [].slice.call(document.querySelectorAll(".link-button img, .contrib-button img, .feature-button img, .header img, i, span.tech"));
    var lis = [].slice.call(document.querySelectorAll(".topnav ul li i, .topnav p, .topnav span"));
    var nowTime = new Date().getTime();
    var deltaTime = nowTime - startTime;
    var offset = deltaTime % changeTime;
    var syncNextStart = changeTime - offset;

    setTimeout(function() {
      ChangeEachBorderColor(icons);
      ChangeEachLiColor(lis);

      setInterval(function() {
        ChangeEachBorderColor(icons);
        ChangeEachLiColor(lis);
      }, changeTime)

    }, syncNextStart)
  }

  function ChangeEachBorderColor(icons) {
    icons.forEach(function(icon){
      icon.style.borderColor = randomColor;
      icon.style.color = randomColor;
    })
  }

  function ChangeEachLiColor(lis) {
    lis.forEach(function(li){
      li.style.color = randomColor;
    })
  }

  vm.features = Features;
  vm.mysites = Links;
  vm.contribs = Contribs;
})
