///<reference path="../../../typings/angularjs/angular.d.ts"/>
module ui {
  "use strict";

  export function viewHeader(): angular.IDirective {
    return {
      restrict: "E",
      transclude: true,
      template:
        `
          <header><h1 ng-transclude></h1></header>
        `
    };
  }
}
