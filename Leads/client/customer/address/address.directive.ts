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
      template: `
        <section ng-form="addressForm" class="address">
          <address-line label="Line 1" name="line1" required></address-line>
          <address-line label="Line 2" name="line2"></address-line>
          <address-line label="Line 3" name="line3"></address-line>
          <address-line label="Town" name="town"></address-line>

          <postcode></postcode>
        </section>
      `
    };
  }
}
