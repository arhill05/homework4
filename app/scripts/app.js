'use strict';

/**
 * @ngdoc overview
 * @name homework4App
 * @description
 * # homework4App
 *
 * Main module of the application.
 */
angular
  .module('homework4App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/tutorial', {
          templateUrl: 'views/tutorial.html',
          controller: 'TutorialCtrl',
          controllerAs: 'tutorial'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var tutorials = [
	{
		url: "http://tutorials.jenkov.com/angularjs/index.html",
		title: "AngularJS Tutorial",
		image: "http://tutorials.jenkov.com/images/layout/small-portrait_mini.jpg",
		author: "Jakob Jenkov",
        description: "A very in-depth AngularJS tutorial written by one man. You can follow along with code snippets posted in the tutorial. Great for beginners!"
	},
	{
		url: "http://tutorialzine.com/2013/08/learn-angularjs-5-examples/",
		title: "Learn AngularJS With These 5 Practical Examples",
		image: "http://blog.guinatal.com/wp-content/uploads/2015/01/angularjs.png",
		author: "JMartin Angelov",
        description: "Five examples built with AngularJS that are actual practical uses. If you've dabbled in Angular before, these will be very interesting!"
	},
	{
		url: "https://github.com/angular-app/angular-app",
		title: "AngularJS CRUD application demo",
		image: "http://blog.guinatal.com/wp-content/uploads/2015/01/angularjs.png",
		author: "angular-app",
        description: "A demo of angular in action written by the folks over at AngularJS.org. It's hosted on GitHub!"
	},
	{
		url: "https://www.airpair.com/angularjs/building-angularjs-app-tutorial",
		title: "AngularJS Tutorial - Building a Web App in 5 minutes",
		image: "https://0.gravatar.com/avatar/8ef3e73105c63fcac882115c9ad346f2?s=100",
		author: "Nick Kaye",
        description: "A tutorial that shows just how quickly you can build a web application using AngularJS. It's a great attestment to the power of AngularJS."
	},
	{
		url: "http://www.toptal.com/angular-js/a-step-by-step-guide-to-your-first-angularjs-app",
		title: "A Step-by-Step Guide to Your First AngularJS App",
		image: "http://www.toptal.com/uploads/user/photo/256/small_1233500_508166272610903_1884720025_n.jpg",
		author: "Raoni Boaventura",
        description: "A very user friendly beginner's guide to building your first AngularJS application. You should start here!"
	},
	{
		url: "http://ng-learn.org/tags/workshop.html",
		title: "Angularjs -- Workshop",
		image: "http://blog.guinatal.com/wp-content/uploads/2015/01/angularjs.png",
		author: "Santiago Esteva",
        description: "An interactive workshop for people to learn Angular, whether you're a beginner or a pro."
	},
	{
		url: "https://www.youtube.com/watch?v=tnXO-i7944M",
		title: "AngularJS in 20ish Minutes",
		image: "http://blog.guinatal.com/wp-content/uploads/2015/01/angularjs.png",
		author: "Dan Wahlin",
        description: "A video on YouTube that describes AngularJS in 20'ish' minutes."
	},
	{
		url: "http://www.microsoftvirtualacademy.com/training-courses/introduction-to-angularjs",
		title: "Introduction to AngularJS",
		image: "https://irodriguezm.files.wordpress.com/2009/12/logo_mva.png",
		author: "Microsoft Virtual Academy",
        description: "Microsoft's own training course for Angular JS. Extremely informative, even if it's a bit outdated."
	}	
]