///<reference path="../../../typings/angularjs/angular.d.ts"/>
"use strict";

module lead {
  export function leadDetails(): angular.IDirective {
    return {
      restrict: "E",
      scope: {
        lead: '='
      },
      templateUrl: "lead/lead-details/lead-details.directive.html"
    };
  }
}