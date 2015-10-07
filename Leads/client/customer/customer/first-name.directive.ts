///<reference path="customer-scope.ts"/>
module customer {
  "use strict";

  export function firstName(): angular.IDirective {
    return {
      replace: true,
      restrict: "E",
      scope: {
        customer: "="
      },
      template:
        `<div>
          <form-group>
            <control-label>First name</control-label>
            <input
              type="text"
              name="firstName"
              ng-model="customer.firstName"
              ng-model-options="{ debounce: 500 }"
              class="customer-first-name"
              required
              maxlength="40">
              <div ng-messages="ngModel.$error">
                <div ng-message="required">Required</div>
              </div>
          </form-group>
        </div>`
    };
  }
}
