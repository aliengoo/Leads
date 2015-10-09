module customer {
  "use strict";

  export function customer(): angular.IDirective {
    return {
      restrict: "E",
      scope: {
        customer: "="
      },
      template: function (element: angular.IAugmentedJQuery, attributes: angular.IAttributes): string {

        var debugHtml: string = attributes.hasOwnProperty("debug") ? `<pre>{{customer | json}}</pre>` : `<!-- debug disabled -->`;

        return `
          <div ng-form="customerForm">
            <first-name></first-name>
            <middle-names></middle-names>
            <last-name></last-name>
            <birth-date customer="customer"></birth-date>
            ${debugHtml}
          </div>
        `;
      }
    };
  }
}
