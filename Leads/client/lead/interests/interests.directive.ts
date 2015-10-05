///<reference path="../../../typings/angularjs/angular.d.ts"/>

"use strict";

module lead {

  export function interests() : angular.IDirective {
    return {
      restrict: "E",
      scope: {
        interests: "="
      },
      templateUrl: "lead/interests/interests.directive.html"
    };
  }


}
