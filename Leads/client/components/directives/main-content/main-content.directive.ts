"use strict";

module leads.components {
  export function mainContent(): angular.IDirective {
    return {
      restrict: "E",
      transclude: true,
      template: "<div class='main-content' ng-transclude=''></div>"
    };
  }

}


