"use strict";

module leads.components {
  export function controlLabel(): angular.IDirective {

    return {
      restrict: "E",
      link: (scope: angular.IScope, element: angular.IAugmentedJQuery) => {
        var html = `<label class="control-label">${element.text()}</label>`;
        element.html(html);
      }
    };

  }
}
