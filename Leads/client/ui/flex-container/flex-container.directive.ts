///<reference path="../../../typings/angularjs/angular.d.ts"/>
"use strict";

module ui {
  export function flexContainer(): angular.IDirective {
    return {
      restrict: "E",
      transclude: true,
      template: "<div class='flex-container' ng-transclude=''></div>"
    };
  }
}

