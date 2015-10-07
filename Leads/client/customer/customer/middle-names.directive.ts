///<reference path="customer-scope.ts"/>
module customer {
  "use strict";

  export function middleNames(): angular.IDirective {
    return {
      replace: true,
      require: "^formGroup",
      restrict: "E",
      scope: {
        customer: "="
      },
      template:
        `<div>
          <form-group>
            <control-label>Middle names</control-label>
            <input
              type="text"
              name="middleNames"
              ng-model="customer.middleNames"
              ng-model-options="{ debounce: 500 }"
              maxlength="40"
              class="customer-middle-names"
              form-group-error>
          </form-group>
        </div>`
    };
  }
}

