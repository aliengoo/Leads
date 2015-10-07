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
          <form-group>
            <control-label>
              Line 1
            </control-label>
            <input type="text" ng-model="address.line1" name="line1" required class="address-line" maxlength="40">
          </form-group>

          <form-group>
            <control-label>
              Line 2
            </control-label>
            <input type="text" ng-model="address.line2" name="line2" class="address-line" maxlength="40">
          </form-group>

          <form-group>
            <control-label>
              Line 3
            </control-label>
            <input type="text" ng-model="address.line3" name="line3" class="address-line" maxlength="40">
          </form-group>

          <form-group>
            <control-label>
              Town
            </control-label>
            <input type="text" ng-model="address.town" name="town" required class="address-town" maxlength="40">
          </form-group>

          <form-group>
            <control-label>
              Postcode
            </control-label>
            <input type="text" ng-model="address.postcode" name="postcode" required class="address-postcode" maxlength="8">
          </form-group>
        </section>
      `
    };
  }
}
