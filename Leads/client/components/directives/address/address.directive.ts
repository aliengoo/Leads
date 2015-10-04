///<reference path="../../../../typings/tsd.d.ts"/>
///<reference path="../../../models/models.d.ts"/>
///<reference path="../address-type/address-type.directive.ts"/>

"use strict";

module leads.components {

  interface IAddressScope extends angular.IScope {
    address?: leads.models.IAddress
  }

  /* @ngInject */
  export function address() : angular.IDirective {
    return {
      restrict: "E",
      scope: {
        address: "="
      },
      templateUrl: "components/directives/address/address.directive.html",
      link: link
    };

    function link(scope: IAddressScope, element: angular.IAugmentedJQuery) {

    }
  }
}