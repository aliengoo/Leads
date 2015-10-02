///<reference path="../../../../typings/tsd.d.ts"/>
///<reference path="./sidebar-state.service.ts"/>
///<reference path="..\..\services\window-resize.service.ts"/>

"use strict";

module leads.components {

  interface ISidebarScope extends angular.IScope {
    title:string;
    open: boolean;

    toggle():void;
  }

  /* @ngInject */
  export function sideBar(
    windowResizeService:IWindowResizeService,
    $window:angular.IWindowService,
    $compile:angular.ICompileService):angular.IDirective {
    return {
      restrict: "E",
      templateUrl: "components/directives/sidebar/sidebar.directive.html",
      transclude: true,
      link: link
    };

    function link(scope:ISidebarScope, element:angular.IAugmentedJQuery, attributes:angular.IAttributes, ctrl:any, transclude:angular.ITranscludeFunction) {

      transclude(scope, function (clone:angular.IAugmentedJQuery) {
        angular.forEach(clone, function(cloneChild){
          if (cloneChild.localName === "sidebar-title") {
            $(element).find("[data-title-html]").append(cloneChild);
          }

          if (cloneChild.localName === "sidebar-content") {
            $(element).find("[data-content-html]").append(cloneChild);
          }
        });
      });

      var $nav = $(element).find("nav");

      // not happy about this, because there is a dependency on the .sidebar margin settings (10px);
      var artificialMargin = 0;

      // set initial size
      $nav.css("height", $($window).height() - artificialMargin);

      // watch for size changes
      windowResizeService.registerObserver("sidebar", (windowSize:IWindowSize) => {
        $nav.css("height", windowSize.h - artificialMargin);
      });

      scope.open = true;

      scope.toggle = ():void => {
        scope.open = !scope.open;
      };

      scope.$on("$destroy", ():void => {
        windowResizeService.deregisterObserver("sidebar");
      });
    }
  }
}
