///<reference path="../../../../typings/tsd.d.ts"/>
///<reference path="./sidebar-state.service.ts"/>

"use strict";

module leads.components {

  interface ISidebarScope extends angular.IScope {
    toggle():void;

    open: boolean;
  }

  /* @ngInject */
  export function sideBar(sidebarStateService: ISidebarStateService, $window: angular.IWindowService): angular.IDirective {
    return {
      restrict: "E",
      templateUrl: "components/directives/sidebar/sidebar.directive.html",
      link: link
    };

    function link(scope: ISidebarScope, element: angular.IAugmentedJQuery) {

      scope.open = true;

      scope.toggle = (): void => {
        scope.open = !scope.open;
      };


    }
  }
}
