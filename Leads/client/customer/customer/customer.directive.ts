
module customer {
  "use strict";

  export function customer(): angular.IDirective {
    return {
      restrict: "E",
      scope: {
        customer: "="
      },
      template:
        `
          <div ng-form="customerForm">
            <first-name></first-name>
            <middle-names></middle-names>
            <last-name></last-name>
            <birth-date customer="customer"></birth-date>
          </div>
        `
    };
  }
}
