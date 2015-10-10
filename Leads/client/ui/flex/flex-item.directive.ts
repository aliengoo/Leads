///<reference path="../../../typings/angularjs/angular.d.ts"/>
module ui {
  "use strict";

  interface IFlexItemAttributes extends angular.IAttributes {
    order?: number;
    grow?: number;
    shrink?: number;
    basis?: string;
    alignSelf?: string;
  }

  /* @ngInject */
  export function flexItem(): angular.IDirective {
    return {
      // TODO: align-self
      restrict: "AE",
      replace: true,
      require: "^flex",
      transclude: true,
      template: `
          <div class="flex-item" ng-transclude></div>
        `
      ,
      link: link
    };

    function link(scope: angular.IScope, element: angular.IAugmentedJQuery, attributes: IFlexItemAttributes): void {
      element.css("order", attributes.order || 0);
      element.css("flex-grow", attributes.grow || 0);
      element.css("flex-shrink", attributes.shrink || 0);
      element.css("flex-basis", attributes.basis || "auto");

      element.addClass(`flex-item-align-self-${attributes.alignSelf || "auto"}`);
    }
  }
}
