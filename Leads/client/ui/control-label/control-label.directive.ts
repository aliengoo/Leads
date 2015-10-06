///<reference path="../../../typings/angularjs/angular.d.ts"/>

module ui {
  "use strict";

  export function controlLabel(): angular.IDirective {
    return {
      link: link,
      replace: true,
      restrict: "E"
    };

    function link(scope: angular.IScope, element: angular.IAugmentedJQuery): void {
      var html: any = `<label class="control-label">${element.text()}</label>`;
      element.html(html);
    }
  }
}
