///<reference path="..\..\..\typings\tsd.d.ts"/>

module ui {
  "use strict";

  export function helpBlock(): angular.IDirective {
    return {
      replace: true,
      restrict: "E",
      template: "<span class='help-block-directive' ng-transclude=''></span>",
      transclude: true
    };
  }
}
