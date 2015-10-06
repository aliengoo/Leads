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
            <input type="text" name="firstName" ng-model="customer.firstName" required maxlength="40" class="customer-first-name">
          </form-group>
        </div>`
    };
  }
}
