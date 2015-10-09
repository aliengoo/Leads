///<reference path="customer-scope.ts"/>
module customer {
  "use strict";

  export function middleNames(): angular.IDirective {
    return {
      replace: true,
      require: "^customer",
      restrict: "E",
      template:
        `<div>
          <customer-name-part label="Middle names" name="middleNames" required>
            <ng-messages for="middleNames.$error">
              <ng-message when="maxlength">Too long</ng-message>
            </ng-messages>
          </customer-name-part>
        </div>`
    };
  }
}

