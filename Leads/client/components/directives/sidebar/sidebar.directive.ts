///<reference path="../../../../typings/tsd.d.ts"/>
///<reference path="./sidebar-state.service.ts"/>

"use strict";

module leads.components {

  interface ISidebarScope extends angular.IScope {
    isOpen(open?: boolean): boolean;
  }

  /* @ngInject */
  export function sideBar(sidebarState: ISidebarState): angular.IDirective {
    return {
      restrict: "E",
      templateUrl: "components/directives/sidebar/sidebar.directive.html",
      link: link
    };

    function link(scope: ISidebarScope, element: angular.IAugmentedJQuery) {

    }
  }
}
