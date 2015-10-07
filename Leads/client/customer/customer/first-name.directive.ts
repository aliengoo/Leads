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
        `<ng-messages>
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
              <help-block>
                <ng-messages for="ngModel.$error">
                  <ng-message when="required" class="error">Required</div>
                </ng-messages>
              </help-block>
          </form-group>
        </div>`
    };
  }
}
