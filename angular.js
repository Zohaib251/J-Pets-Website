var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
    })
    .when("/about", {
      templateUrl: "about.html",
    })
    .when("/services", {
      templateUrl: "services.html",
    })

    .when("/contact", {
      templateUrl: "contact.html",
    })
    .when("/sign_in", {
      templateUrl: "sign_in.html",
    })
    .when("/sign_up", {
      templateUrl: "sign_up.html",
    })
    .otherwise("/", {
      templateUrl: "home.html",
    });
});
