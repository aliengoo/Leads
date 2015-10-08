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
      template: `
        <div>
          <form-group observe>
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
                  <ng-message when="required">Required</ng-message>
                  <ng-message when="maxlength">Too long</ng-message>
                </ng-messages>
              </help-block>

          </form-group>
        </div>`
    };
  }
}
