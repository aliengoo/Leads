///<reference path="../../../typings/angularjs/angular.d.ts"/>
"use strict";

module lead {
  export function listSidebar(): angular.IDirective {
    return {
      restrict: "E",
      templateUrl: "lead/list-sidebar/list-sidebar.directive.html"
    };
  }
}