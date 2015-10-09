///<reference path="../../../typings/angularjs/angular.d.ts"/>
module ui {
  "use strict";

  interface IFlexItemAttributes extends angular.IAttributes {
    order?: number;
    grow?: number;
    shrink?: number;
    basis?: string;
  }

  export function flexItem(): angular.IDirective {
    return {
      // TODO: align-self
      restrict: "E",
      replace: true,
      require: "^flex",
      transclude: true,
      template: function(element: angular.IAugmentedJQuery, attributes: IFlexItemAttributes): string {

        return `
          <div class="flex-item" ng-transclude></div>
        `;
      }
    };
  }
}
