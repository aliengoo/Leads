///<reference path="../../../typings/angularjs/angular.d.ts"/>

module lead {
  "use strict";

  export function searchInput(): angular.IDirective {
    return {
      restrict: "E",
      template:
        `
          <div>
            <form-group>
              <input type="text" placeholder="search" ng-model="vm.search" maxlength="30">
            </form-group>
          </div>
        `
    };
  }
}
