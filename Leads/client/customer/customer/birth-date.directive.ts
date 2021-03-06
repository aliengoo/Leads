///<reference path="customer-scope.ts"/>
module customer {
  "use strict";

  export function birthDate(): angular.IDirective {
    return {
      replace: true,
      require: "^customer",
      restrict: "E",
      template: `
        <div>
          <form-group>
            <control-label>Birth date</control-label>
            <input
              type="date"
              name="birthDate"
              ng-model="customer.birthDate"
              class="customer-birth-date">
          </form-group>
        </div>`
    };
  }
}

