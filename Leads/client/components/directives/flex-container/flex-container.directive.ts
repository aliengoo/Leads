"use strict";

module leads.components {
  export function flexContainer(): angular.IDirective {
    return {
      restrict: "E",
      transclude: true,
      template: "<div class='flex-container' ng-transclude=''></div>"
    };
  }
}

