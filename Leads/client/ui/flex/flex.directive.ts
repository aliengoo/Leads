///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="align-items-options.ts"/>
///<reference path="flex-direction-options.ts"/>
///<reference path="flex-wrap-options.ts"/>
///<reference path="justify-content-options.ts"/>


module ui {

  "use strict";

  interface IFlexAttributes extends angular.IAttributes {
    direction?: string;
    wrap?: string;
    justify?: string;
    alignItems?: string;
  }

  /* @ngInject */
  export function flex($log: angular.ILogService,
                          flexDirectionOptions: Array<string>,
                          flexWrapOptions: Array<string>,
                          justifyContentOptions: Array<string>,
                          alignItemsOptions: Array<string>,
                          _: _.LoDashStatic): angular.IDirective {

    return {
      restrict: "E",
      replace: true,
      transclude: true,
      template: function (element: angular.IAugmentedJQuery, attributes: IFlexAttributes): string {

        // set defaults
        if (angular.isUndefined(attributes.direction) || attributes.direction === "") {
          attributes.direction = "row";
        }

        if (angular.isUndefined(attributes.wrap) || attributes.wrap === "") {
          attributes.wrap = "wrap";
        }

        if (angular.isUndefined(attributes.justify) || attributes.justify === "") {
          attributes.justify = "flex-start";
        }

        if (angular.isUndefined(attributes.alignItems) || attributes.alignItems === "") {
          attributes.alignItems = "flex-start";
        }

        // check options, notify, and set default
        if (!_.contains(flexDirectionOptions, attributes.direction)) {
          $log.warn(`The flex-row[direction] options ${attributes.direction} is not valid, defaulting to 'row'`);
          attributes.direction = "row";
        }

        if (!_.contains(flexWrapOptions, attributes.wrap)) {
          $log.warn(`The flex-row[wrap] options ${attributes.wrap} is not valid, defaulting to 'wrap'`);
          attributes.wrap = "wrap";
        }

        if (!_.contains(justifyContentOptions, attributes.justify)) {
          $log.warn(`The flex-row[justify] options ${attributes.justify} is not valid, defaulting to 'flex-start'`);
          attributes.justify = "flex-start";
        }

        if (!_.contains(alignItemsOptions, attributes.alignItems)) {
          $log.warn(`The flex-row[alignItems] options ${attributes.alignItems} is not valid, defaulting to 'flex-start'`);
          attributes.alignItems = "flex-start";
        }

        // set class names
        var flexDirectionOption: string = `flex-direction-${attributes.direction}`;
        var flexWrapOption: string = `flex-${attributes.wrap}`;
        var justifyContentOption: string = `flex-justify-content-${attributes.justify}`;
        var alignItemsOption: string = `flex-align-items-${attributes.alignItems}`;

        return `
          <div class="flex ${flexDirectionOption} ${flexWrapOption} ${justifyContentOption} ${alignItemsOption}" ng-transclude></div>
        `;
      }
    };
  }
}
