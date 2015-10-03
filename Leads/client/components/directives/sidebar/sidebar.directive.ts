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

      // styles
      var duration = 0.3;
      var interval = "+=0.01";
      var width = parseInt(attributes["width"] || 250);
      var hiddenWidth = parseInt(attributes["hiddenWidth"] || 47);

      // elements
      var $nav = $(element).find("nav");
      $nav.css("width", width);

      var $sidebarElements = $(element).find("[data-sidebar]");
      var $sidebarHeader = $(element).find("[data-sidebar-header]");
      var $sidebarContent = $(element).find("[data-sidebar-content]");


      // import elements form original declaration
      transclude(scope, function (clone:angular.IAugmentedJQuery) {
        angular.forEach(clone, function(cloneChild){
          if (cloneChild.localName === "sidebar-header") {
            $sidebarHeader.append(cloneChild);
          }

          if (cloneChild.localName === "sidebar-content") {
            $sidebarContent.append(cloneChild);
          }
        });
      });

      // manage resizing of sidebar (height changes)

      // not happy about this, because there is a dependency on the .sidebar margin settings (10px);
      var artificialMargin = 0;

      // set initial size
      $nav.css("height", $($window).height() - artificialMargin);

      // watch for size changes
      windowResizeService.registerObserver("sidebar", (windowSize:IWindowSize) => {
        $nav.css("height", windowSize.h - artificialMargin);
      });

      // toggling
      scope.open = true;

      scope.toggle = ():void => {
        scope.open = !scope.open;

        if (scope.open) {
          opening();
        } else {
          closing();
        }
      };

      scope.$on("$destroy", ():void => {
        windowResizeService.deregisterObserver("sidebar");
      });

      function opening() {
        var tl = new TimelineMax();

        tl.to($nav, duration, {
          width: width
        }, interval);

        tl.to($sidebarElements, duration, {
          autoAlpha: 1, display: 'block'
        });

      }

      function closing() {
        var tl = new TimelineMax();
        tl.to($sidebarElements, duration, {
          autoAlpha: 0, display: 'none'
        }, interval);

        tl.to($nav, duration, {
          width: hiddenWidth
        });
      }
    }
  }
}
