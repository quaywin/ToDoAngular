(function() {
  angular.module('todoApp').factory('ToDoService', ToDoService);
  ToDoService.$inject = ['$http'];

  function ToDoService($http) {
    var service = {};
    service.loadData = function() {
      return $http.get("todo.json").success(function(res) {
        return res.data;
      });
    }
    return service;
  }
})();
