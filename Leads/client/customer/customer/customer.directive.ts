"use strict";

namespace customer {
  export function customer(): angular.IDirective {
    return {
      restrict: "E",
      scope: {
        customer: "="
      },
      templateUrl: "customer/customer/customer.directive.html"
    };
  }
}
