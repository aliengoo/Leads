///<reference path="../../../typings/angularjs/angular.d.ts"/>
module ui {
  "use strict";

  export function viewSubHeader(): angular.IDirective {
    return {
      restrict: "E",
      transclude: true,
      template:
        `
          <header><h3 ng-transclude></h3></header>
        `
    };
  }
}
