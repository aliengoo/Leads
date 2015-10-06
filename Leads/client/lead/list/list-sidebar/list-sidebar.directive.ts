///<reference path="../../../../typings/angularjs/angular.d.ts"/>

module lead {
  "use strict";

  export function listSidebar(): angular.IDirective {
    return {
      restrict: "E",
      templateUrl: "lead/list/list-sidebar/list-sidebar.directive.html"
    };
  }
}
