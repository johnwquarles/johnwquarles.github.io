angular.module('app.factories')

.factory('Contribs', function() {
  return [

    { img: "snacktn.png",
      link_url: "http://snacktn.com",
      alt: "Snack TN",
      github_url: "https://github.com/RJFryman/snack_tennessee",
      tech: "Tech: Ruby on Rails, Ruby, ERB, HTML5, Sass",
      copy: "Snack Tennessee showcases Tennessee's local foods, beverages and producers. Created \
            in 48 hours at Hack Tennessee 2015."},

    { img: "nashculturecrawl.png",
      link_url: "http://james-logan.github.io/nashville-adventure/",
      alt: "Nashville Culture Crawl",
      github_url: "https://github.com/james-logan/nashville-adventure",
      tech: "Tech: Javascript, Jade, Google Maps API, Sass",
      copy: "Nashville Culture Crawl is a Google Maps app featuring Nashville public art installations and \
            historical markers. Created at the National Day of Civic Hacking 2015."}

  ];
})
