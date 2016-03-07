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

  .directive('mustMatch', function($parse) {
    return {
      require: 'ngModel',
      link: function(scope, el, attr, controller) {

        var exp = $parse(attr.mustMatch)

        function checkValidity() {
          var val = exp(scope);
          var thisVal = el.val();
          if (val != thisVal) {
            controller.$setValidity("mustMatch", false);
          } else {
            controller.$setValidity("mustMatch", true);
          }
        }

        scope.$watch(attr.ngModel, checkValidity);
        scope.$watch(exp, checkValidity);
      }
    }
  });
