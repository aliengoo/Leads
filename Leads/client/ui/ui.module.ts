///<reference path="clearfix/clearfix.directive.ts"/>
///<reference path="flex-container/flex-container.directive.ts"/>
///<reference path="main-content/main-content.directive.ts"/>
///<reference path="window-resize/window-resize.service.ts"/>
///<reference path="sidebar/sidebar.directive.ts"/>
"use strict";

module ui {
  angular.module("ui", [])
    .directive("clearfix", clearfix)
    .directive("flexContainer", flexContainer)
    .directive("mainContent", mainContent)
    .directive("sidebar", sidebar)
    .service("windowResizeService", WindowResizeService);
}