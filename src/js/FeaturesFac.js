angular.module('app.factories')

.factory('Features', function() {
  return [
    { img: "earthinvasion2.png",
      link_url: "http://earthinvasiongame.com",
      alt: "Earth Invasion 2.0",
      github_url: "https://github.com/johnwquarles/earthinvasion2.0",
      tech: "Tech: C#, Unity 3D, JavaScript, AngularJS, Node.js, Express.js, Socket.IO, PostgreSQL, Redis, Jade, Sass, Gulp",
      copy: "The invasion continues! Defend the Earth \
            while earning achievements and tracking  \
            both your times and accuracy ratings wave-by-wave. \
            Aim for a top score on the leaderboards \
            and chat with your fellow Earth defenders-- \
            all updating in real-time!"
    }
  ];
})
