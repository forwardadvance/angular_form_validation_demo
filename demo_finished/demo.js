angular.module('app', [])
  .controller('formController', function($scope) {

  })
  .directive('alwaysInvalid', function() {
    return {
      require: 'ngModel',
      link: function(scope, ele, attrs, controller) {
        scope.$watch(attrs.ngModel, function() {
          controller.$setValidity('alwaysInvalid', false);
        });
      }
    }
  })
