///<reference path="customer-scope.ts"/>
module customer {
  "use strict";

  export function firstName(): angular.IDirective {
    return {
      replace: true,
      require: "^customer",
      restrict: "E",
      template: `
        <div>
          <customer-name-part label="First name" name="firstName" required>
            <ng-messages for="firstName.$error">
                <ng-message when="required">Required</ng-message>
                <ng-message when="maxlength">Too long</ng-message>
              </ng-messages>
          </customer-name-part>
        </div>`
    };
  }
}
