///<reference path="../../../typings/tsd.d.ts"/>
"use strict";

module bootstrap {
  export function formGroup() : angular.IDirective {
    return {
      restrict: "E",
      transclude: true,
      replace: true,
      template: `<div class="form-group" ng-transclude></div>`,
      link: (scope: angular.IScope, element:angular.IAugmentedJQuery):void => {
        $(element).find("input, select, textarea").addClass("form-control");
      }
    };
  }
}
