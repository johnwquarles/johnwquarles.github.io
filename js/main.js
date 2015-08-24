'use strict';

angular.module('app.controllers').controller('Main', function (Colors, $scope) {
  var vm = this;
  var title = document.querySelector('.header h1');
  var randomColor = Colors.randomColor();
  var changeTime = 3000;
  var startTime;

  setInterval(function () {
    randomColor = Colors.randomColor();
  }, changeTime);

  title.style.color = randomColor;
  startTime = new Date().getTime();
  setInterval(function () {
    startTime = new Date().getTime();
    title.style.color = randomColor;
  }, changeTime);

  vm.iconColorChange = function () {
    var icons = [].slice.call(document.querySelectorAll('.link-button img, .contrib-button img, .feature-button img, .header img, i, span.tech'));
    var lis = [].slice.call(document.querySelectorAll('.topnav ul li i, p'));
    var nowTime = new Date().getTime();
    var deltaTime = nowTime - startTime;
    var offset = deltaTime % changeTime;
    var syncNextStart = changeTime - offset;

    setTimeout(function () {
      ChangeEachBorderColor(icons);
      ChangeEachLiColor(lis);

      setInterval(function () {
        ChangeEachBorderColor(icons);
        ChangeEachLiColor(lis);
      }, changeTime);
    }, syncNextStart);
  };

  function ChangeEachBorderColor(icons) {
    icons.forEach(function (icon) {
      icon.style.borderColor = randomColor;
      icon.style.color = randomColor;
    });
  }

  function ChangeEachLiColor(lis) {
    lis.forEach(function (li) {
      li.style.color = randomColor;
    });
  }

  vm.features = [{ img_url: '../img/earthinvasion.png',
    link_url: 'http://quarl.es/earthinvasion',
    alt: 'Earth Invasion',
    github_url: 'https://github.com/johnwquarles',
    tech: 'Tech: C#, Unity 3D',
    copy: 'The invasion has begun! Take control             of the earth\'s last remaining defenses and fight             to the pulse-pounding beats of chiptune legend DJ Cutman.             Command a variety of powerful weaponry from multiple             2D and 3D perspectives as the music advances in time to your triumphs.             Will you deliver our salvation?' }];

  vm.mysites = [{ img_url: '../img/movieagenda.png',
    link_url: 'http://quarl.es/movieagenda',
    alt: 'Movie Agenda',
    github_url: 'https://github.com/johnwquarles/movieagenda',
    tech: 'Tech: Javascript, JQuery, Firebase, HTML5, Sass',
    copy: 'Can\'t remember which films to catch? Make your own list             with MovieAgenda and have Metacritic & Rotten Tomato scores,             MPAA ratings, trailers and assorted clips all at your fingertips.' }, { img_url: '../img/blackjack.png',
    link_url: 'http://quarl.es/blackjack',
    alt: 'Blackjack',
    github_url: 'https://github.com/johnwquarles/blackjack',
    tech: 'Tech: Javascript, JQuery, HTML5, Sass',
    copy: 'Need a hit? Play a few hands of no-stakes Blackjack             and keep your bank account intact.' }, { img_url: '../img/weather-app.png',
    link_url: 'http://quarl.es/weather-app',
    alt: 'Weather App',
    github_url: 'https://github.com/johnwquarles/weather-app',
    tech: 'Tech: Javascript, HTML5, CSS',
    copy: 'No need to feel embarrassed-- we all forget to check             the weather sometimes. Quick, before anyone finds out!             Get your forecast by zip code or geolocation!             And for goodness\' sake, check the five-day!' }, { img_url: '../img/stocksbocks.png',
    link_url: 'http://quarl.es/stocksbocks',
    alt: 'Stocksbocks',
    github_url: 'https://github.com/johnwquarles/stocksbocks/tree/gh-pages',
    tech: 'Tech: Javascript, JQuery, HTML5, CSS',
    copy: 'If you\'re serious about business, you know stocks             and you know bocks. So prepare to have your socks rocked, doc!             Presenting STOCKSBOCKS.' }, { img_url: '../img/armolegeddon.png',
    link_url: 'http://quarl.es/armolegeddon',
    alt: 'Armolegeddon',
    github_url: 'https://github.com/johnwquarles/armolegeddon/tree/gh-pages',
    tech: 'Tech: Javascript, HTML5, CSS',
    copy: 'Moles! Holes! See if you can bop more of them than I can setTimeouts.             Thinking about it though, no, that\'s definitely impossible.' }, { img_url: '../img/sketchy-etch.png',
    link_url: 'http://quarl.es/sketchy-etch',
    alt: 'Sketchy-Etch',
    github_url: 'https://github.com/johnwquarles/sketchy-etch',
    tech: 'Tech: Javascript, JQuery, HTML5, CSS',
    copy: 'We all start somewhere! And by gum, if I\'m going anywhere, I\'m bringing             the Sketchy-Etch with me (could be a long car ride).' }];

  vm.contribs = [{ img_url: '../img/snacktn.png',
    link_url: 'http://snacktn.com',
    alt: 'Snack TN' }, { img_url: '../img/nashculturecrawl.png',
    link_url: 'http://james-logan.github.io/nashville-adventure/',
    alt: 'Nashville Culture Crawl' }];
});
//# sourceMappingURL=data:application/json;base64,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LDRJQUNxRCxFQUFDLENBRS9ELENBQUM7O0FBRUYsSUFBRSxDQUFDLFFBQVEsR0FBRyxDQUVaLEVBQUUsT0FBTyxFQUFFLG9CQUFvQjtBQUM3QixZQUFRLEVBQUUsb0JBQW9CO0FBQzlCLE9BQUcsRUFBRSxVQUFVLEVBQUMsRUFFbEIsRUFBRSxPQUFPLEVBQUUsNkJBQTZCO0FBQ3RDLFlBQVEsRUFBRSxtREFBbUQ7QUFDN0QsT0FBRyxFQUFFLHlCQUF5QixFQUFDLENBRWxDLENBQUM7Q0FDSCxDQUFDLENBQUEiLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnKVxuXG4uY29udHJvbGxlcignTWFpbicsIGZ1bmN0aW9uIChDb2xvcnMsICRzY29wZSl7XG4gIHZhciB2bSA9IHRoaXM7XG4gIHZhciB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyIGgxXCIpO1xuICB2YXIgcmFuZG9tQ29sb3IgPSBDb2xvcnMucmFuZG9tQ29sb3IoKTtcbiAgdmFyIGNoYW5nZVRpbWUgPSAzMDAwO1xuICB2YXIgc3RhcnRUaW1lO1xuXG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgcmFuZG9tQ29sb3IgPSBDb2xvcnMucmFuZG9tQ29sb3IoKTtcbiAgfSwgY2hhbmdlVGltZSk7XG5cbiAgdGl0bGUuc3R5bGUuY29sb3IgPSByYW5kb21Db2xvcjtcbiAgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gcmFuZG9tQ29sb3I7XG4gIH0sIGNoYW5nZVRpbWUpXG5cbiAgdm0uaWNvbkNvbG9yQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGljb25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmstYnV0dG9uIGltZywgLmNvbnRyaWItYnV0dG9uIGltZywgLmZlYXR1cmUtYnV0dG9uIGltZywgLmhlYWRlciBpbWcsIGksIHNwYW4udGVjaFwiKSk7XG4gICAgdmFyIGxpcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b3BuYXYgdWwgbGkgaSwgcFwiKSk7XG4gICAgdmFyIG5vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB2YXIgZGVsdGFUaW1lID0gbm93VGltZSAtIHN0YXJ0VGltZTtcbiAgICB2YXIgb2Zmc2V0ID0gZGVsdGFUaW1lICUgY2hhbmdlVGltZTtcbiAgICB2YXIgc3luY05leHRTdGFydCA9IGNoYW5nZVRpbWUgLSBvZmZzZXQ7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgQ2hhbmdlRWFjaEJvcmRlckNvbG9yKGljb25zKTtcbiAgICAgIENoYW5nZUVhY2hMaUNvbG9yKGxpcyk7XG5cbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBDaGFuZ2VFYWNoQm9yZGVyQ29sb3IoaWNvbnMpO1xuICAgICAgICBDaGFuZ2VFYWNoTGlDb2xvcihsaXMpO1xuICAgICAgfSwgY2hhbmdlVGltZSlcblxuICAgIH0sIHN5bmNOZXh0U3RhcnQpXG4gIH1cblxuICBmdW5jdGlvbiBDaGFuZ2VFYWNoQm9yZGVyQ29sb3IoaWNvbnMpIHtcbiAgICBpY29ucy5mb3JFYWNoKGZ1bmN0aW9uKGljb24pe1xuICAgICAgaWNvbi5zdHlsZS5ib3JkZXJDb2xvciA9IHJhbmRvbUNvbG9yO1xuICAgICAgaWNvbi5zdHlsZS5jb2xvciA9IHJhbmRvbUNvbG9yO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBDaGFuZ2VFYWNoTGlDb2xvcihsaXMpIHtcbiAgICBsaXMuZm9yRWFjaChmdW5jdGlvbihsaSl7XG4gICAgICBsaS5zdHlsZS5jb2xvciA9IHJhbmRvbUNvbG9yO1xuICAgIH0pXG4gIH1cblxuICB2bS5mZWF0dXJlcyA9IFtcblxuICAgIHsgaW1nX3VybDogXCIuLi9pbWcvZWFydGhpbnZhc2lvbi5wbmdcIixcbiAgICAgIGxpbmtfdXJsOiBcImh0dHA6Ly9xdWFybC5lcy9lYXJ0aGludmFzaW9uXCIsXG4gICAgICBhbHQ6IFwiRWFydGggSW52YXNpb25cIixcbiAgICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvaG53cXVhcmxlc1wiLFxuICAgICAgdGVjaDogXCJUZWNoOiBDIywgVW5pdHkgM0RcIixcbiAgICAgIGNvcHk6IFwiVGhlIGludmFzaW9uIGhhcyBiZWd1biEgVGFrZSBjb250cm9sIFxcXG4gICAgICAgICAgICBvZiB0aGUgZWFydGgncyBsYXN0IHJlbWFpbmluZyBkZWZlbnNlcyBhbmQgZmlnaHQgXFxcbiAgICAgICAgICAgIHRvIHRoZSBwdWxzZS1wb3VuZGluZyBiZWF0cyBvZiBjaGlwdHVuZSBsZWdlbmQgREogQ3V0bWFuLiBcXFxuICAgICAgICAgICAgQ29tbWFuZCBhIHZhcmlldHkgb2YgcG93ZXJmdWwgd2VhcG9ucnkgZnJvbSBtdWx0aXBsZSBcXFxuICAgICAgICAgICAgMkQgYW5kIDNEIHBlcnNwZWN0aXZlcyBhcyB0aGUgbXVzaWMgYWR2YW5jZXMgaW4gdGltZSB0byB5b3VyIHRyaXVtcGhzLiBcXFxuICAgICAgICAgICAgV2lsbCB5b3UgZGVsaXZlciBvdXIgc2FsdmF0aW9uP1wifVxuXG4gIF1cblxuICB2bS5teXNpdGVzID0gW1xuXG4gICAgeyBpbWdfdXJsOiBcIi4uL2ltZy9tb3ZpZWFnZW5kYS5wbmdcIixcbiAgICAgIGxpbmtfdXJsOiBcImh0dHA6Ly9xdWFybC5lcy9tb3ZpZWFnZW5kYVwiLFxuICAgICAgYWx0OiBcIk1vdmllIEFnZW5kYVwiLFxuICAgICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vam9obndxdWFybGVzL21vdmllYWdlbmRhXCIsXG4gICAgICB0ZWNoOiBcIlRlY2g6IEphdmFzY3JpcHQsIEpRdWVyeSwgRmlyZWJhc2UsIEhUTUw1LCBTYXNzXCIsXG4gICAgICBjb3B5OiBcIkNhbid0IHJlbWVtYmVyIHdoaWNoIGZpbG1zIHRvIGNhdGNoPyBNYWtlIHlvdXIgb3duIGxpc3QgXFxcbiAgICAgICAgICAgIHdpdGggTW92aWVBZ2VuZGEgYW5kIGhhdmUgTWV0YWNyaXRpYyAmIFJvdHRlbiBUb21hdG8gc2NvcmVzLCBcXFxuICAgICAgICAgICAgTVBBQSByYXRpbmdzLCB0cmFpbGVycyBhbmQgYXNzb3J0ZWQgY2xpcHMgYWxsIGF0IHlvdXIgZmluZ2VydGlwcy5cIn0sXG5cbiAgICB7IGltZ191cmw6IFwiLi4vaW1nL2JsYWNramFjay5wbmdcIixcbiAgICAgIGxpbmtfdXJsOiBcImh0dHA6Ly9xdWFybC5lcy9ibGFja2phY2tcIixcbiAgICAgIGFsdDogXCJCbGFja2phY2tcIixcbiAgICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvaG53cXVhcmxlcy9ibGFja2phY2tcIixcbiAgICAgIHRlY2g6IFwiVGVjaDogSmF2YXNjcmlwdCwgSlF1ZXJ5LCBIVE1MNSwgU2Fzc1wiLFxuICAgICAgY29weTogXCJOZWVkIGEgaGl0PyBQbGF5IGEgZmV3IGhhbmRzIG9mIG5vLXN0YWtlcyBCbGFja2phY2sgXFxcbiAgICAgICAgICAgIGFuZCBrZWVwIHlvdXIgYmFuayBhY2NvdW50IGludGFjdC5cIn0sXG5cbiAgICB7IGltZ191cmw6IFwiLi4vaW1nL3dlYXRoZXItYXBwLnBuZ1wiLFxuICAgICAgbGlua191cmw6IFwiaHR0cDovL3F1YXJsLmVzL3dlYXRoZXItYXBwXCIsXG4gICAgICBhbHQ6IFwiV2VhdGhlciBBcHBcIixcbiAgICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvaG53cXVhcmxlcy93ZWF0aGVyLWFwcFwiLFxuICAgICAgdGVjaDogXCJUZWNoOiBKYXZhc2NyaXB0LCBIVE1MNSwgQ1NTXCIsXG4gICAgICBjb3B5OiBcIk5vIG5lZWQgdG8gZmVlbCBlbWJhcnJhc3NlZC0tIHdlIGFsbCBmb3JnZXQgdG8gY2hlY2sgXFxcbiAgICAgICAgICAgIHRoZSB3ZWF0aGVyIHNvbWV0aW1lcy4gUXVpY2ssIGJlZm9yZSBhbnlvbmUgZmluZHMgb3V0ISBcXFxuICAgICAgICAgICAgR2V0IHlvdXIgZm9yZWNhc3QgYnkgemlwIGNvZGUgb3IgZ2VvbG9jYXRpb24hIFxcXG4gICAgICAgICAgICBBbmQgZm9yIGdvb2RuZXNzJyBzYWtlLCBjaGVjayB0aGUgZml2ZS1kYXkhXCJ9LFxuXG4gICAgeyBpbWdfdXJsOiBcIi4uL2ltZy9zdG9ja3Nib2Nrcy5wbmdcIixcbiAgICAgIGxpbmtfdXJsOiBcImh0dHA6Ly9xdWFybC5lcy9zdG9ja3Nib2Nrc1wiLFxuICAgICAgYWx0OiBcIlN0b2Nrc2JvY2tzXCIsXG4gICAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qb2hud3F1YXJsZXMvc3RvY2tzYm9ja3MvdHJlZS9naC1wYWdlc1wiLFxuICAgICAgdGVjaDogXCJUZWNoOiBKYXZhc2NyaXB0LCBKUXVlcnksIEhUTUw1LCBDU1NcIixcbiAgICAgIGNvcHk6IFwiSWYgeW91J3JlIHNlcmlvdXMgYWJvdXQgYnVzaW5lc3MsIHlvdSBrbm93IHN0b2NrcyBcXFxuICAgICAgICAgICAgYW5kIHlvdSBrbm93IGJvY2tzLiBTbyBwcmVwYXJlIHRvIGhhdmUgeW91ciBzb2NrcyByb2NrZWQsIGRvYyEgXFxcbiAgICAgICAgICAgIFByZXNlbnRpbmcgU1RPQ0tTQk9DS1MuXCJ9LFxuXG4gICAgeyBpbWdfdXJsOiBcIi4uL2ltZy9hcm1vbGVnZWRkb24ucG5nXCIsXG4gICAgICBsaW5rX3VybDogXCJodHRwOi8vcXVhcmwuZXMvYXJtb2xlZ2VkZG9uXCIsXG4gICAgICBhbHQ6IFwiQXJtb2xlZ2VkZG9uXCIsXG4gICAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qb2hud3F1YXJsZXMvYXJtb2xlZ2VkZG9uL3RyZWUvZ2gtcGFnZXNcIixcbiAgICAgIHRlY2g6IFwiVGVjaDogSmF2YXNjcmlwdCwgSFRNTDUsIENTU1wiLFxuICAgICAgY29weTogXCJNb2xlcyEgSG9sZXMhIFNlZSBpZiB5b3UgY2FuIGJvcCBtb3JlIG9mIHRoZW0gdGhhbiBJIGNhbiBzZXRUaW1lb3V0cy4gXFxcbiAgICAgICAgICAgIFRoaW5raW5nIGFib3V0IGl0IHRob3VnaCwgbm8sIHRoYXQncyBkZWZpbml0ZWx5IGltcG9zc2libGUuXCJ9LFxuXG4gICAgeyBpbWdfdXJsOiBcIi4uL2ltZy9za2V0Y2h5LWV0Y2gucG5nXCIsXG4gICAgICBsaW5rX3VybDogXCJodHRwOi8vcXVhcmwuZXMvc2tldGNoeS1ldGNoXCIsXG4gICAgICBhbHQ6IFwiU2tldGNoeS1FdGNoXCIsXG4gICAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qb2hud3F1YXJsZXMvc2tldGNoeS1ldGNoXCIsXG4gICAgICB0ZWNoOiBcIlRlY2g6IEphdmFzY3JpcHQsIEpRdWVyeSwgSFRNTDUsIENTU1wiLFxuICAgICAgY29weTogXCJXZSBhbGwgc3RhcnQgc29tZXdoZXJlISBBbmQgYnkgZ3VtLCBpZiBJJ20gZ29pbmcgYW55d2hlcmUsIEknbSBicmluZ2luZyBcXFxuICAgICAgICAgICAgdGhlIFNrZXRjaHktRXRjaCB3aXRoIG1lIChjb3VsZCBiZSBhIGxvbmcgY2FyIHJpZGUpLlwifVxuXG4gIF07XG5cbiAgdm0uY29udHJpYnMgPSBbXG5cbiAgICB7IGltZ191cmw6IFwiLi4vaW1nL3NuYWNrdG4ucG5nXCIsXG4gICAgICBsaW5rX3VybDogXCJodHRwOi8vc25hY2t0bi5jb21cIixcbiAgICAgIGFsdDogXCJTbmFjayBUTlwifSxcblxuICAgIHsgaW1nX3VybDogXCIuLi9pbWcvbmFzaGN1bHR1cmVjcmF3bC5wbmdcIixcbiAgICAgIGxpbmtfdXJsOiBcImh0dHA6Ly9qYW1lcy1sb2dhbi5naXRodWIuaW8vbmFzaHZpbGxlLWFkdmVudHVyZS9cIixcbiAgICAgIGFsdDogXCJOYXNodmlsbGUgQ3VsdHVyZSBDcmF3bFwifVxuXG4gIF07XG59KVxuIl19
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJNYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnKVxuXG4uY29udHJvbGxlcignTWFpbicsIGZ1bmN0aW9uIChDb2xvcnMsICRzY29wZSl7XG4gIHZhciB2bSA9IHRoaXM7XG4gIHZhciB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyIGgxXCIpO1xuICB2YXIgcmFuZG9tQ29sb3IgPSBDb2xvcnMucmFuZG9tQ29sb3IoKTtcbiAgdmFyIGNoYW5nZVRpbWUgPSAzMDAwO1xuICB2YXIgc3RhcnRUaW1lO1xuXG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgcmFuZG9tQ29sb3IgPSBDb2xvcnMucmFuZG9tQ29sb3IoKTtcbiAgfSwgY2hhbmdlVGltZSk7XG5cbiAgdGl0bGUuc3R5bGUuY29sb3IgPSByYW5kb21Db2xvcjtcbiAgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gcmFuZG9tQ29sb3I7XG4gIH0sIGNoYW5nZVRpbWUpXG5cbiAgdm0uaWNvbkNvbG9yQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGljb25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmstYnV0dG9uIGltZywgLmNvbnRyaWItYnV0dG9uIGltZywgLmZlYXR1cmUtYnV0dG9uIGltZywgLmhlYWRlciBpbWcsIGksIHNwYW4udGVjaFwiKSk7XG4gICAgdmFyIGxpcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b3BuYXYgdWwgbGkgaSwgcFwiKSk7XG4gICAgdmFyIG5vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB2YXIgZGVsdGFUaW1lID0gbm93VGltZSAtIHN0YXJ0VGltZTtcbiAgICB2YXIgb2Zmc2V0ID0gZGVsdGFUaW1lICUgY2hhbmdlVGltZTtcbiAgICB2YXIgc3luY05leHRTdGFydCA9IGNoYW5nZVRpbWUgLSBvZmZzZXQ7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgQ2hhbmdlRWFjaEJvcmRlckNvbG9yKGljb25zKTtcbiAgICAgIENoYW5nZUVhY2hMaUNvbG9yKGxpcyk7XG5cbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBDaGFuZ2VFYWNoQm9yZGVyQ29sb3IoaWNvbnMpO1xuICAgICAgICBDaGFuZ2VFYWNoTGlDb2xvcihsaXMpO1xuICAgICAgfSwgY2hhbmdlVGltZSlcblxuICAgIH0sIHN5bmNOZXh0U3RhcnQpXG4gIH1cblxuICBmdW5jdGlvbiBDaGFuZ2VFYWNoQm9yZGVyQ29sb3IoaWNvbnMpIHtcbiAgICBpY29ucy5mb3JFYWNoKGZ1bmN0aW9uKGljb24pe1xuICAgICAgaWNvbi5zdHlsZS5ib3JkZXJDb2xvciA9IHJhbmRvbUNvbG9yO1xuICAgICAgaWNvbi5zdHlsZS5jb2xvciA9IHJhbmRvbUNvbG9yO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBDaGFuZ2VFYWNoTGlDb2xvcihsaXMpIHtcbiAgICBsaXMuZm9yRWFjaChmdW5jdGlvbihsaSl7XG4gICAgICBsaS5zdHlsZS5jb2xvciA9IHJhbmRvbUNvbG9yO1xuICAgIH0pXG4gIH1cblxuICB2bS5mZWF0dXJlcyA9IFtcblxuICAgIHsgaW1nX3VybDogXCIuLi9pbWcvZWFydGhpbnZhc2lvbi5wbmdcIixcbiAgICAgIGxpbmtfdXJsOiBcImh0dHA6Ly9xdWFybC5lcy9lYXJ0aGludmFzaW9uXCIsXG4gICAgICBhbHQ6IFwiRWFydGggSW52YXNpb25cIixcbiAgICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvaG53cXVhcmxlc1wiLFxuICAgICAgdGVjaDogXCJUZWNoOiBDIywgVW5pdHkgM0RcIixcbiAgICAgIGNvcHk6IFwiVGhlIGludmFzaW9uIGhhcyBiZWd1biEgVGFrZSBjb250cm9sIFxcXG4gICAgICAgICAgICBvZiB0aGUgZWFydGgncyBsYXN0IHJlbWFpbmluZyBkZWZlbnNlcyBhbmQgZmlnaHQgXFxcbiAgICAgICAgICAgIHRvIHRoZSBwdWxzZS1wb3VuZGluZyBiZWF0cyBvZiBjaGlwdHVuZSBsZWdlbmQgREogQ3V0bWFuLiBcXFxuICAgICAgICAgICAgQ29tbWFuZCBhIHZhcmlldHkgb2YgcG93ZXJmdWwgd2VhcG9ucnkgZnJvbSBtdWx0aXBsZSBcXFxuICAgICAgICAgICAgMkQgYW5kIDNEIHBlcnNwZWN0aXZlcyBhcyB0aGUgbXVzaWMgYWR2YW5jZXMgaW4gdGltZSB0byB5b3VyIHRyaXVtcGhzLiBcXFxuICAgICAgICAgICAgV2lsbCB5b3UgZGVsaXZlciBvdXIgc2FsdmF0aW9uP1wifVxuXG4gIF1cblxuICB2bS5teXNpdGVzID0gW1xuXG4gICAgeyBpbWdfdXJsOiBcIi4uL2ltZy9tb3ZpZWFnZW5kYS5wbmdcIixcbiAgICAgIGxpbmtfdXJsOiBcImh0dHA6Ly9xdWFybC5lcy9tb3ZpZWFnZW5kYVwiLFxuICAgICAgYWx0OiBcIk1vdmllIEFnZW5kYVwiLFxuICAgICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vam9obndxdWFybGVzL21vdmllYWdlbmRhXCIsXG4gICAgICB0ZWNoOiBcIlRlY2g6IEphdmFzY3JpcHQsIEpRdWVyeSwgRmlyZWJhc2UsIEhUTUw1LCBTYXNzXCIsXG4gICAgICBjb3B5OiBcIkNhbid0IHJlbWVtYmVyIHdoaWNoIGZpbG1zIHRvIGNhdGNoPyBNYWtlIHlvdXIgb3duIGxpc3QgXFxcbiAgICAgICAgICAgIHdpdGggTW92aWVBZ2VuZGEgYW5kIGhhdmUgTWV0YWNyaXRpYyAmIFJvdHRlbiBUb21hdG8gc2NvcmVzLCBcXFxuICAgICAgICAgICAgTVBBQSByYXRpbmdzLCB0cmFpbGVycyBhbmQgYXNzb3J0ZWQgY2xpcHMgYWxsIGF0IHlvdXIgZmluZ2VydGlwcy5cIn0sXG5cbiAgICB7IGltZ191cmw6IFwiLi4vaW1nL2JsYWNramFjay5wbmdcIixcbiAgICAgIGxpbmtfdXJsOiBcImh0dHA6Ly9xdWFybC5lcy9ibGFja2phY2tcIixcbiAgICAgIGFsdDogXCJCbGFja2phY2tcIixcbiAgICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvaG53cXVhcmxlcy9ibGFja2phY2tcIixcbiAgICAgIHRlY2g6IFwiVGVjaDogSmF2YXNjcmlwdCwgSlF1ZXJ5LCBIVE1MNSwgU2Fzc1wiLFxuICAgICAgY29weTogXCJOZWVkIGEgaGl0PyBQbGF5IGEgZmV3IGhhbmRzIG9mIG5vLXN0YWtlcyBCbGFja2phY2sgXFxcbiAgICAgICAgICAgIGFuZCBrZWVwIHlvdXIgYmFuayBhY2NvdW50IGludGFjdC5cIn0sXG5cbiAgICB7IGltZ191cmw6IFwiLi4vaW1nL3dlYXRoZXItYXBwLnBuZ1wiLFxuICAgICAgbGlua191cmw6IFwiaHR0cDovL3F1YXJsLmVzL3dlYXRoZXItYXBwXCIsXG4gICAgICBhbHQ6IFwiV2VhdGhlciBBcHBcIixcbiAgICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvaG53cXVhcmxlcy93ZWF0aGVyLWFwcFwiLFxuICAgICAgdGVjaDogXCJUZWNoOiBKYXZhc2NyaXB0LCBIVE1MNSwgQ1NTXCIsXG4gICAgICBjb3B5OiBcIk5vIG5lZWQgdG8gZmVlbCBlbWJhcnJhc3NlZC0tIHdlIGFsbCBmb3JnZXQgdG8gY2hlY2sgXFxcbiAgICAgICAgICAgIHRoZSB3ZWF0aGVyIHNvbWV0aW1lcy4gUXVpY2ssIGJlZm9yZSBhbnlvbmUgZmluZHMgb3V0ISBcXFxuICAgICAgICAgICAgR2V0IHlvdXIgZm9yZWNhc3QgYnkgemlwIGNvZGUgb3IgZ2VvbG9jYXRpb24hIFxcXG4gICAgICAgICAgICBBbmQgZm9yIGdvb2RuZXNzJyBzYWtlLCBjaGVjayB0aGUgZml2ZS1kYXkhXCJ9LFxuXG4gICAgeyBpbWdfdXJsOiBcIi4uL2ltZy9zdG9ja3Nib2Nrcy5wbmdcIixcbiAgICAgIGxpbmtfdXJsOiBcImh0dHA6Ly9xdWFybC5lcy9zdG9ja3Nib2Nrc1wiLFxuICAgICAgYWx0OiBcIlN0b2Nrc2JvY2tzXCIsXG4gICAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qb2hud3F1YXJsZXMvc3RvY2tzYm9ja3MvdHJlZS9naC1wYWdlc1wiLFxuICAgICAgdGVjaDogXCJUZWNoOiBKYXZhc2NyaXB0LCBKUXVlcnksIEhUTUw1LCBDU1NcIixcbiAgICAgIGNvcHk6IFwiSWYgeW91J3JlIHNlcmlvdXMgYWJvdXQgYnVzaW5lc3MsIHlvdSBrbm93IHN0b2NrcyBcXFxuICAgICAgICAgICAgYW5kIHlvdSBrbm93IGJvY2tzLiBTbyBwcmVwYXJlIHRvIGhhdmUgeW91ciBzb2NrcyByb2NrZWQsIGRvYyEgXFxcbiAgICAgICAgICAgIFByZXNlbnRpbmcgU1RPQ0tTQk9DS1MuXCJ9LFxuXG4gICAgeyBpbWdfdXJsOiBcIi4uL2ltZy9hcm1vbGVnZWRkb24ucG5nXCIsXG4gICAgICBsaW5rX3VybDogXCJodHRwOi8vcXVhcmwuZXMvYXJtb2xlZ2VkZG9uXCIsXG4gICAgICBhbHQ6IFwiQXJtb2xlZ2VkZG9uXCIsXG4gICAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qb2hud3F1YXJsZXMvYXJtb2xlZ2VkZG9uL3RyZWUvZ2gtcGFnZXNcIixcbiAgICAgIHRlY2g6IFwiVGVjaDogSmF2YXNjcmlwdCwgSFRNTDUsIENTU1wiLFxuICAgICAgY29weTogXCJNb2xlcyEgSG9sZXMhIFNlZSBpZiB5b3UgY2FuIGJvcCBtb3JlIG9mIHRoZW0gdGhhbiBJIGNhbiBzZXRUaW1lb3V0cy4gXFxcbiAgICAgICAgICAgIFRoaW5raW5nIGFib3V0IGl0IHRob3VnaCwgbm8sIHRoYXQncyBkZWZpbml0ZWx5IGltcG9zc2libGUuXCJ9LFxuXG4gICAgeyBpbWdfdXJsOiBcIi4uL2ltZy9za2V0Y2h5LWV0Y2gucG5nXCIsXG4gICAgICBsaW5rX3VybDogXCJodHRwOi8vcXVhcmwuZXMvc2tldGNoeS1ldGNoXCIsXG4gICAgICBhbHQ6IFwiU2tldGNoeS1FdGNoXCIsXG4gICAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qb2hud3F1YXJsZXMvc2tldGNoeS1ldGNoXCIsXG4gICAgICB0ZWNoOiBcIlRlY2g6IEphdmFzY3JpcHQsIEpRdWVyeSwgSFRNTDUsIENTU1wiLFxuICAgICAgY29weTogXCJXZSBhbGwgc3RhcnQgc29tZXdoZXJlISBBbmQgYnkgZ3VtLCBpZiBJJ20gZ29pbmcgYW55d2hlcmUsIEknbSBicmluZ2luZyBcXFxuICAgICAgICAgICAgdGhlIFNrZXRjaHktRXRjaCB3aXRoIG1lIChjb3VsZCBiZSBhIGxvbmcgY2FyIHJpZGUpLlwifVxuXG4gIF07XG5cbiAgdm0uY29udHJpYnMgPSBbXG5cbiAgICB7IGltZ191cmw6IFwiLi4vaW1nL3NuYWNrdG4ucG5nXCIsXG4gICAgICBsaW5rX3VybDogXCJodHRwOi8vc25hY2t0bi5jb21cIixcbiAgICAgIGFsdDogXCJTbmFjayBUTlwifSxcblxuICAgIHsgaW1nX3VybDogXCIuLi9pbWcvbmFzaGN1bHR1cmVjcmF3bC5wbmdcIixcbiAgICAgIGxpbmtfdXJsOiBcImh0dHA6Ly9qYW1lcy1sb2dhbi5naXRodWIuaW8vbmFzaHZpbGxlLWFkdmVudHVyZS9cIixcbiAgICAgIGFsdDogXCJOYXNodmlsbGUgQ3VsdHVyZSBDcmF3bFwifVxuXG4gIF07XG59KVxuIl0sImZpbGUiOiJNYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=