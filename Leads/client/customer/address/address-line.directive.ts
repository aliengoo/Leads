///<reference path="../../../typings/angularjs/angular.d.ts"/>
module customer {
  "use strict";

  interface IAddressLineAttributes extends angular.IAttributes {
    name?: string;
    label?: string;
    required?: string;
  }

  export function addressLine(): angular.IDirective {

    return {
      restrict: "E",
      replace: true,
      require: "^address",
      template: function (element: angular.IAugmentedJQuery, attributes: IAddressLineAttributes): string {
        return `
        <div>
          <form-group observe>
            <control-label>${attributes.label}</control-label>
            <input
              type='text'
              class='address-line'
              maxlength='40'
              ng-model="address.${attributes.name}"
              ng-required='${attributes.hasOwnProperty("required")}'
              name="${attributes.name}"
              >
          </form-group>
        </div>`;
      }
    };
  }
}
