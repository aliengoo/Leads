
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
            <first-name customer="customer"></first-name>
            <middle-names customer="customer"></middle-names>
            <last-name customer="customer"></last-name>
            <birth-date customer="customer"></birth-date>
          </div>
        `
    };
  }
}
