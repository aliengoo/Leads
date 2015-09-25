///<reference path="../../../../typings/tsd.d.ts"/>
///<reference path="../../../models/models.d.ts"/>
///<reference path="../address-type/address-type.directive.ts"/>

"use strict";

module leads.views {

  interface IAddressScope extends angular.IScope {
    address?: leads.models.IAddress
  }

  /* @ngInject */
  export function addressDirective() : angular.IDirective {
    return {
      restrict: "E",
      scope: {
        address: "="
      },
      templateUrl: "views/lead/components/address/address.html",
      link: link
    };

    function link(scope: IAddressScope, element: angular.IAugmentedJQuery) {

    }
  }
}