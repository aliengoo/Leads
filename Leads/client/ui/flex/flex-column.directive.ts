///<reference path="../../../typings/angularjs/angular.d.ts"/>
module ui {
  "use strict";

  export function flexColumn(): angular.IDirective {
    return {
      restrict: "E",
      template:
        `
          <div class="flex flex-column" ng-transclude></div>
        `
    };
  }
}
