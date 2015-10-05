///<reference path="../../../typings/angularjs/angular.d.ts"/>
"use strict";

module lead {
  export function searchInput(): angular.IDirective {
    return {
      restrict: "E",
      templateUrl: "lead/search-input/search-input.directive.html",
    };
  }
}