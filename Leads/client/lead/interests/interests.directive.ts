///<reference path="../../../typings/angularjs/angular.d.ts"/>


module lead {
  "use strict";

  export function interests(): angular.IDirective {
    return {
      restrict: "E",
      scope: {
        interests: "="
      },
      templateUrl: "lead/interests/interests.directive.html"
    };
  }


}
