///<reference path="..\..\..\..\..\typings\tsd.d.ts"/>
"use strict";

module leads.views.leads {
  export function leadsSidebar(): angular.IDirective {
    return {
      restrict: "E",
      templateUrl: "views/leads/directives/leads-sidebar/leads-sidebar.directive.html",
      link: link
    };

    function link(scope:angular.IScope, element:angular.IAugmentedJQuery) {

    }
  }
}