///<reference path="../../../typings/angularjs/angular.d.ts"/>

module customer {
  "use strict";

  export function addressType(): angular.IDirective {

    return {
      restrict: "E",
      scope: {
        address: "="
      },
      template: `
        <form-group>
          <control-label>Type</control-label>
          <select name="addressType" ng-model="address.type" class="address-type">
            <option value="mailing">Mailing</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
        </form-group>`
    };
  }
}
