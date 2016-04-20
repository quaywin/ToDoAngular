(function() {
  angular.module('todoApp').controller('ToDoController', ToDoController);
  ToDoController.$inject = ['$scope', 'ToDoService'];

  function ToDoController($scope, ToDoService) {
    $scope.todo = {
      user: 'Thang',
      items: []
    };
    $scope.incompleteCount = function() {
      if ($scope.todo) {
        var count = 0;
        angular.forEach($scope.todo.items, function(item) {
          if (!item.done) {
            count++
          }
        });
        return count;
      }
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

    var init = function() {
      ToDoService.loadData().then(function(res) {
        $scope.todo.items = res.data;
      })
    }
    return init();
  }
})();
