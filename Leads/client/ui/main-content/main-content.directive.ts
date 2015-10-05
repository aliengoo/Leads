///<reference path="../../../typings/angularjs/angular.d.ts"/>
"use strict";

module ui {
  export function mainContent(): angular.IDirective {
    return {
      restrict: "E",
      transclude: true,
      template: "<div class='main-content' ng-transclude=''></div>"
    };
  }

}


