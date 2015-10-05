///<reference path="..\..\..\typings\tsd.d.ts"/>
"use strict";

module bootstrap {
  export function helpBlock(): angular.IDirective {
    return {
      restrict: "E",
      replace: true,
      transclude: true,
      template: "<span class='help-block-directive' ng-transclude=''></span>"
    };
  }
}