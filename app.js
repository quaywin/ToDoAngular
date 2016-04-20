var model = {
  user: "Adam"
};
angular.module("todoApp", []);

angular.module("todoApp").run(function($http) {
  $http.get("todo.json").success(function(data) {
    model.items = data;
  });
});

angular.module("todoApp").filter("checkedItems", function() {
  return function(items, showComplete) {
    var resultArr = [];
    angular.forEach(items, function(item) {

      if (item.done == false || showComplete == true) {
        resultArr.push(item);
      }
    });
    return resultArr;
  }
});

angular.module("todoApp").controller("ToDoController", function($scope) {
  $scope.todo = model;

  $scope.incompleteCount = function() {
    var count = 0;
    angular.forEach($scope.todo.items, function(item) {
      if (!item.done) {
        count++
      }
    });
    return count;
  }

  $scope.warningLevel = function() {
    return $scope.incompleteCount() < 3 ? "label-success" :
      "label-warning";
  }

  $scope.addNewItem = function(actionText) {
    $scope.todo.items.push({
      action: actionText,
      done: false
    });
  }

});
