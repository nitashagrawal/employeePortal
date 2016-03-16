/*angular.module('starter.controllers', [])

.controller('EmployeesCtrl', function($scope, Employees) {
  $scope.employess = Employees.all();
  $scope.remove = function(employee) {
    Employees.remove(employee);
  };
})

.controller('EmployeeCtrl', function($scope, Employees) {
  $scope.get = function(employeeId) {
    return Employees.get(employeeId);
  };
})*/

var EmployeesCtrl = (function(){
  return {
    all:function(){
      return Model.all();
    }
  };
})();

var EmployeeCtrl = (function(){
  return {
    get:function(employeeId) {
      return Model.get(employeeId).data;
    }
  };
})();

