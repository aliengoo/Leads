///<reference path="../../../typings/angularjs/angular.d.ts"/>

module ui {
  "use strict";

  export function flexContainer(): angular.IDirective {
    return {
      restrict: "E",
      template: "<div class='flex-container' ng-transclude=''></div>",
      transclude: true
    };
  }
}

