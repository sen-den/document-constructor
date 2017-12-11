/**
 * The controller doesn't do much more than setting the initial data model
 */
angular.module("demo").controller("NestedListsDemoController", function($scope) {

    $scope.models = {
        selected: null,
        templates: [
            {type: "container", title: "Блок", id: 1, columns: [[]]},
            {type: "item", title: "Текст", id: 2},
            {type: "item", title: "Ввод", id: 11},
            {type: "item", title: "Дата", id: 12},
            
        ],
        dropzones: {
            "Шаблон": [
                
            ]            
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});
