///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../window-resize/window-resize.service.ts"/>

module ui {
  import TimelineMaxService = vendor.TimelineMaxService;
  "use strict";

  interface ISidebarScope extends angular.IScope {
    title: string;
    open: boolean;

    toggle(): void;
  }

  interface ISidebarAttributes extends angular.IAttributes {
    width?: string;
    hiddenWidth?: string;
  }

  /* @ngInject */
  export function sidebar(windowResizeService: IWindowResizeService,
                          $window: angular.IWindowService,
                          $: JQueryStatic,
                          TimelineMax: TimelineMax): angular.IDirective {

    return {
      link: link,
      restrict: "E",
      template: `
          <nav class="sidebar">
            <a href="" ng-click="toggle()" class="sidebar-toggle"></a>

            <div data-sidebar>
              <div data-sidebar-header ng-class="{'sidebar-header': open, 'sidebar-header-closed': !open}">
              </div>
              <clearfix></clearfix>
              <div data-sidebar-content ng-class="{'sidebar-content': open, 'sidebar-content-closed': !open}"></div>
            </div>
          </nav>
        `,
      transclude: true
    };

    function link(scope: ISidebarScope,
                  element: angular.IAugmentedJQuery,
                  attributes: ISidebarAttributes,
                  controller: any,
                  transclude: angular.ITranscludeFunction): void {

      // styles
      var duration: number = 0.3;
      var interval: string = "+=0.01";
      var width: number = parseInt(attributes.width || "250", 10);
      var hiddenWidth: number = parseInt(attributes.hiddenWidth || "47", 10);

      // elements
      var $nav: JQuery = find("nav");
      var $sidebarElements: JQuery = find("[data-sidebar]");
      var $sidebarHeader: JQuery = find("[data-sidebar-header]");
      var $sidebarContent: JQuery = find("[data-sidebar-content]");

      $nav.css("width", width);

      // import elements form original declaration
      transclude(scope, function (clone: angular.IAugmentedJQuery): void {
        angular.forEach(clone, function (cloneChild: angular.IAugmentedJQuery): void {

          /* tslint:disable no-string-literal*/
          var tag: string = cloneChild["localName"];
          /* tslint:enable no-string-literal*/

          if (tag === "sidebar-header") {
            $sidebarHeader.append(cloneChild);
          } else if (tag === "sidebar-content") {
            $sidebarContent.append(cloneChild);
          }
        });
      });

      // manage resizing of sidebar (height changes)

      // not happy about this, because there is a dependency on the .sidebar margin settings (10px);
      var artificialMargin: number = 0;

      // set initial size
      $nav.css("height", $($window).height() - artificialMargin);

      // watch for size changes
      windowResizeService.registerObserver("sidebar", (windowSize: IWindowSize) => {
        $nav.css("height", windowSize.h - artificialMargin);
      });

      // toggling
      scope.open = true;

      scope.toggle = (): void => {
        scope.open = !scope.open;

        if (scope.open) {
          opening();
        } else {
          closing();
        }
      };

      scope.$on("$destroy", (): void => {
        windowResizeService.deregisterObserver("sidebar");
      });

      function opening(): void {
        var tl: TimelineMax = new (<any>TimelineMax)();

        tl.to(
          $nav,
          duration,
          {
            width: width
          },
          interval);

        tl.to(
          $sidebarElements,
          duration,
          {
            autoAlpha: 1, display: "block"
          });

      }

      function closing(): void {
        var tl: TimelineMax = new (<any>TimelineMax)();

        tl.to(
          $sidebarElements,
          duration,
          {
            autoAlpha: 0, display: "none"
          },
          interval);

        tl.to(
          $nav,
          duration,
          {
            width: hiddenWidth
          });
      }

      function find(selector: string): JQuery {
        return $(element).find(selector);
      }
    }
  }
}
