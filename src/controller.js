var app = angular.module('myApp');

// app.controller('myApp.myCtrl', ['$scope', 'app.EmployeeService', function ($scope, EmployeeService) {
app.controller('myCtrl', ['$scope', function ($scope, $http) {
//     GetAllEmployee();
    console.log('I am in controller');
//     $scope.sortColumnBy = function (keyname) {
//         $scope.sortKey = keyname;
//         $scope.reverse = !$scope.reverse;
//     }

//     $scope.employee = {
//         employeeId: '',
//         firstName: '',
//         lastName: '',
//         password: '',
//         daysPerWeek: 0,
//         active: true,
//         departmentId: 0,
//         accountTypeId: 0
//     };

//     $scope.clear = function () {
//         $scope.employee.employeeId = '';
//         $scope.employee.firstName = '';
//         $scope.employee.lastName = '';
//         $scope.employee.password = '';
//         $scope.employee.daysPerWeek = 0;
//         $scope.employee.active = false;
//         $scope.employee.departmentId = 0;
//         $scope.employee.accountTypeId = 0;
//     };

//     function GetAllEmployee() {
//         var getEmployeeData = EmployeeService.getEmployees();

//         getEmployeeData.then(function (employee) {
//             $scope.employees = employee.data;
//         }, function () {
//             alert('Error in getting employee records');
//         });
//     };  
// }]);

})();