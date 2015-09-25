"use strict";

module leads.components {
  export function navbar(): angular.IDirective {
    return {
      restrict: "E",
      templateUrl: "components/bootstrap/navbar/navbar.directive.html"
    };
  }
}
