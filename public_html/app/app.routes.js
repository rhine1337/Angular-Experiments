// configure our routes
employeeApp.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
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
        .otherwise({redirectTo : '/'});
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

employeeApp.controller('toolbarController', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };        
}]);
/*
*/
//formProcessingApp.controller('regFormController',function($scope){
employeeApp.controller('regFormController',function($scope){
    $scope.master = {};
    $scope.update = function(emp) {
        $scope.master = angular.copy(emp);
    };

    $scope.reset = function() {
        $scope.emp = angular.copy($scope.master);
    };

    $scope.reset();
});