///<reference path="../../../typings/angularjs/angular.d.ts"/>

module ui {
  "use strict";

  export function controlLabel(): angular.IDirective {
    return {
      replace: true,
      restrict: "E",
      template: `<label class="control-label" ng-transclude=""></label>`,
      transclude: true
    };
  }
}
