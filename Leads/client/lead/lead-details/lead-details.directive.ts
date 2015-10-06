///<reference path="../../../typings/angularjs/angular.d.ts"/>

module lead {
  "use strict";

  export function leadDetails(): angular.IDirective {
    return {
      restrict: "E",
      scope: {
        lead: "="
      },
      templateUrl: "lead/lead-details/lead-details.directive.html"
    };
  }
}
