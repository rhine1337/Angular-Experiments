// configure our routes
employeeApp.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/home', {
            templateUrl : 'app/components/employeeForm/views/employeeForm.view.html',
            controller  : 'empRegFormController'
        })
        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })
        .otherwise({redirectTo : '/home'});
});

// create the controller and inject Angular's $scope
employeeApp.controller('empRegFormController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Employee Registration Form';
});

employeeApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

employeeApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

toolbarApp.controller('toolbarController', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };        
}]);

formProcessingApp.controller('regFormController',function($scope){
    $scope.formData = {};
    $scope.submission = false;
    console.log($scope.formData);
});
