///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="address.ts"/>

module customer {
  "use strict";

  interface IAddressScope extends angular.IScope {
    address?: IAddress;
  }

  /* @ngInject */
  export function address(): angular.IDirective {
    return {
      restrict: "E",
      scope: {
        address: "="
      },
      templateUrl: "customer/address/address.directive.html"
    };
  }
}
