///<reference path="../../../../typings/tsd.d.ts"/>

"use strict";

module leads.components {

  export function interests() : angular.IDirective {
    return {
      restrict: "E",
      scope: {
        interests: "="
      },
      templateUrl: "components/directives/interests/interests.directive.html"
    };
  }


}
