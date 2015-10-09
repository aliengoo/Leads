///<reference path="../../../typings/tsd.d.ts"/>

module ui {

  import LoDashStatic = _.LoDashStatic;
  "use strict";


  interface IFlexRowAttributes extends angular.IAttributes {
    wrap?: string;
  }
  /* @ngInject */
  export function flexRow(_: LoDashStatic): angular.IDirective {

    var validOptions: Array<string> = ["wrap", "nowrap", "wrap-reverse"];

    return {
      restrict: "E",
      template: function(element: angular.IAugmentedJQuery, attributes: IFlexRowAttributes): string {

        if (angular.isUndefined(attributes.wrap) || attributes.wrap === "") {
          attributes.wrap = "wrap";
        }

        if (validOptions)


        return `
          <div class="flex flex-row" ng-transclude></div>
        `;
      }
    };
  }
}
