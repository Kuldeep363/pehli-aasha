myApp.config(($routeProvider,$locationProvider)=>{

    $locationProvider.html5Mode({
        enabled:true,
        requireBase: false
    })

    $routeProvider
    .when('/',{
        templateUrl:'static/pehliaasha/pages/home.html'
    })
    .when('/contact',{
        templateUrl:'static/pehliaasha/pages/contact.html',
        controller:'contactCtrl'
    })
    .when('/donate',{
        templateUrl:'static/pehliaasha/pages/donate.html'
    })
    .when('/team',{
        templateUrl:'static/pehliaasha/pages/team.html'
    })
    .when('/join-pehli-aasha',{
        templateUrl:'static/pehliaasha/pages/join.html',
        controller:'joinCtrl'
    })
    .when('/gallery',{
        templateUrl:'static/pehliaasha/pages/gallery.html'
    })
    .otherwise({
        redirectTo:'/'
    })
})