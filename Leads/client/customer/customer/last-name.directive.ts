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
        `
        <div>
          <customer-name-part label="Last name" name="lastName" required>
            <ng-messages for="lastName.$error">
                <ng-message when="required">Required</ng-message>
                <ng-message when="maxlength">Too long</ng-message>
              </ng-messages>
          </customer-name-part>
        </div>`
    };
  }
}

