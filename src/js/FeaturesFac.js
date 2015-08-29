angular.module('app.factories')

.factory('Features', function() {
  return [
    { img: "earthinvasion.png",
      link_url: "http://quarl.es/earthinvasion",
      alt: "Earth Invasion",
      github_url: "https://github.com/johnwquarles/earthinvasion",
      tech: "Tech: C#, Unity 3D",
      copy: "The invasion has begun! Take control \
            of the earth's last remaining defenses and fight \
            to the pulse-pounding beats of chiptune legend DJ Cutman. \
            Command a variety of powerful weapons from multiple \
            2D and 3D perspectives as the music advances in time to your triumphs. \
            Will you deliver our salvation?"
    }
  ];
})
