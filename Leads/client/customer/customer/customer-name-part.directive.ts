///<reference path="../../../typings/angularjs/angular.d.ts"/>
module customer {
  "use strict";

  interface ICustomerNamePartAttributes extends angular.IAttributes {
    name?: string;
    label?: string;
    required?: string;
  }

  export function customerNamePart(): angular.IDirective {

    return {
      restrict: "E",
      replace: true,
      require: "^customer",
      transclude: true,
      template: function (element: angular.IAugmentedJQuery, attributes: ICustomerNamePartAttributes): string {
        return `
        <div>
          <form-group observe>
            <control-label>${attributes.label}</control-label>
            <input
              type='text'
              class='customer-name-part'
              maxlength='40'
              limit-chars='{"letters": true, "special": true}'
              ng-model-options="{ debounce: 500 }"
              ng-model="customer.${attributes.name}"
              ng-required='${attributes.hasOwnProperty("required")}'
              name="${attributes.name}"
              >
            <help-block>
              <div ng-transclude></div>
            </help-block>
          </form-group>

        </div>`;
      }
    };
  }
}
