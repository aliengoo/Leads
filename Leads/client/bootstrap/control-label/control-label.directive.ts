///<reference path="../../../typings/angularjs/angular.d.ts"/>

"use strict";

module bootstrap {
  export function controlLabel(): angular.IDirective {
    return {
      restrict: "E",
      replace: true,
      link: (scope: angular.IScope, element: angular.IAugmentedJQuery) => {
        var html = `<label class="control-label">${element.text()}</label>`;
        element.html(html);
      }
    };
  }
}
