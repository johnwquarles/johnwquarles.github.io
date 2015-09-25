angular.module('app.factories')

.factory('Links', function() {
  return [
    { img: "earthinvasion.png",
      link_url: "http://quarl.es/earthinvasion",
      alt: "Earth Invasion",
      github_url: "https://github.com/johnwquarles/earthinvasion",
      tech: "Tech: C#, Unity 3D",
      copy: "The invasion has begun! Fight \
            to the pulse-pounding beats of chiptune legend DJ Cutman from multiple \
            2D and 3D perspectives as the music advances in time to your triumphs."},

    { img: "getsorted.png",
      link_url: "https://github.com/johnwquarles/getsorted#readme",
      alt: "Get Sorted",
      github_url: "https://github.com/johnwquarles/getsorted",
      tech: "Tech: Node.js",
      copy: "Pardner, you look lost. How 'bout we choose an algorithm from the command line and see how disorganized arrays get sorted? \
            GET SORTED, pardner, and you'll never be out of sorts again!"},

    { img: "movieagenda.png",
      link_url: "http://quarl.es/movieagenda",
      alt: "Movie Agenda",
      github_url: "https://github.com/johnwquarles/movieagenda",
      tech: "Tech: Javascript, JQuery, Firebase, HTML5, Sass",
      copy: "Can't remember which films to catch? Make your own list \
            with MovieAgenda and have Metacritic & Rotten Tomato scores, \
            MPAA ratings, trailers and assorted clips all at your fingertips."},

    { img: "blackjack.png",
      link_url: "http://quarl.es/blackjack",
      alt: "Blackjack",
      github_url: "https://github.com/johnwquarles/blackjack",
      tech: "Tech: Javascript, JQuery, HTML5, Sass",
      copy: "Need a hit? Play a few hands of no-stakes Blackjack \
            and keep your bank account intact."},

    { img: "weather-app.png",
      link_url: "http://quarl.es/weather-app",
      alt: "Weather App",
      github_url: "https://github.com/johnwquarles/weather-app",
      tech: "Tech: Javascript, HTML5, CSS",
      copy: "No need to feel embarrassed-- we all forget to check \
            the weather sometimes. Quick, before anyone finds out! \
            Get your forecast by zip code or geolocation! \
            And for goodness' sake, check the five-day!"},

    { img: "stocksbocks.png",
      link_url: "http://quarl.es/stocksbocks",
      alt: "Stocksbocks",
      github_url: "https://github.com/johnwquarles/stocksbocks/tree/gh-pages",
      tech: "Tech: Javascript, JQuery, HTML5, CSS",
      copy: "If you're serious about business, you know stocks \
            and you know bocks. So prepare to have your socks rocked, doc! \
            Presenting STOCKSBOCKS."},

    { img: "armolegeddon.png",
      link_url: "http://quarl.es/armolegeddon",
      alt: "Armolegeddon",
      github_url: "https://github.com/johnwquarles/armolegeddon/tree/gh-pages",
      tech: "Tech: Javascript, HTML5, CSS",
      copy: "Moles! Holes! See if you can bop more of them than I can setTimeouts. \
            Thinking about it though, no, that's definitely impossible."},

    { img: "sketchy-etch.png",
      link_url: "http://quarl.es/sketchy-etch",
      alt: "Sketchy-Etch",
      github_url: "https://github.com/johnwquarles/sketchy-etch",
      tech: "Tech: Javascript, JQuery, HTML5, CSS",
      copy: "We all start somewhere! And by gum, if I'm going anywhere, I'm bringing \
            the Sketchy-Etch with me (could be a long car ride)."}
  ];
})
