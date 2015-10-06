///<reference path="../../../typings/angularjs/angular.d.ts"/>

module ui {
  "use strict";

  export function mainContent(): angular.IDirective {
    return {
      restrict: "E",
      template: "<div class='main-content' ng-transclude=''></div>",
      transclude: true
    };
  }

}


