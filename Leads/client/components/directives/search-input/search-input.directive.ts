///<reference path="..\..\..\..\typings\angularjs\angular.d.ts"/>
"use strict";

module leads.components {
  export function searchInput(): angular.IDirective {
    return {
      restrict: "E",
      templateUrl: "components/directives/search-input/search-input.directive.html",
    };
  }
}