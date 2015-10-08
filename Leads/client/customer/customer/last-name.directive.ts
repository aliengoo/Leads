///<reference path="customer-scope.ts"/>
module customer {
  "use strict";

  export function lastName(): angular.IDirective {
    return {
      replace: true,
      restrict: "E",
      scope: {
        customer: "="
      },
      template:
        `<div>
          <form-group  observe>
            <control-label>Last name</control-label>
            <input
              type="text"
              name="lastName"
              ng-model="customer.lastName"
              ng-model-options="{ debounce: 500 }"
              class="customer-last-name"
              limit-chars='{"letters": true, "special": true}'
              maxlength="40"
              required>
          </form-group>
        </div>`
    };
  }
}

