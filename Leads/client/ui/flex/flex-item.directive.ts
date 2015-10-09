///<reference path="../../../typings/angularjs/angular.d.ts"/>
module ui {
  "use strict";

  export function flexItem(): angular.IDirective {
    return {
      restrict: "E",
      require: "^flex",
      transclude: true,
      template:
        `
          <div class="flex-item" ng-transclude></div>
        `
    };
  }
}
