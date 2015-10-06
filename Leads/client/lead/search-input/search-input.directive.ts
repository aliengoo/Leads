///<reference path="../../../typings/angularjs/angular.d.ts"/>

module lead {
  "use strict";

  export function searchInput(): angular.IDirective {
    return {
      restrict: "E",
      templateUrl: "lead/search-input/search-input.directive.html"
    };
  }
}
