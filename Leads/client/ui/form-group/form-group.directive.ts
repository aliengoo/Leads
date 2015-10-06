///<reference path="../../../typings/tsd.d.ts"/>

module ui {
  "use strict";

  export function formGroup(): angular.IDirective {
    return {
      link: link,
      replace: true,
      restrict: "E",
      template: `<div class="form-group" ng-transclude></div>`,
      transclude: true
    };

    function link(scope: angular.IScope, element: angular.IAugmentedJQuery): void {
      $(element).find("input, select, textarea").addClass("form-control");
    }
  }
}
