///<reference path="../../../typings/angularjs/angular.d.ts"/>
module customer {
  "use strict";

  export function postcode(): angular.IDirective {
    return {
      restrict: "E",
      template:
        `
          <form-group observe>
            <control-label>
              Postcode
            </control-label>
            <input type="text" ng-model="address.postcode" name="postcode" class="address-postcode" maxlength="8">
          </form-group>
        `
    };
  }
}
