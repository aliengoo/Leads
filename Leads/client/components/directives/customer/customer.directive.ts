///<reference path="../../../../typings/tsd.d.ts"/>


"use strict";

module leads.components {
  export function customer(): angular.IDirective {
    return {
      restrict: "E",
      scope: {
        customer: "="
      },
      templateUrl: "components/directives/customer/customer.directive.html"
    };
  }
}
