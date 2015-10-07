///<reference path="clearfix/clearfix.directive.ts"/>
///<reference path="flex-container/flex-container.directive.ts"/>
///<reference path="main-content/main-content.directive.ts"/>
///<reference path="window-resize/window-resize.service.ts"/>
///<reference path="sidebar/sidebar.directive.ts"/>
///<reference path="control-label/control-label.directive.ts"/>
///<reference path="help-block/help-block.directive.ts"/>
///<reference path="form-group/form-group.directive.ts"/>
///<reference path="date-selector/date-selector.directive.ts"/>
///<reference path="form-group/form-group-error/form-group-error.directive.ts"/>
///<reference path="form-group/form-group-error/form-group-error-message.directive.ts"/>

module ui {
  "use strict";

  angular.module("ui", [])
    .directive("clearfix", clearfix)
    .directive("flexContainer", flexContainer)
    .directive("mainContent", mainContent)
    .directive("sidebar", sidebar)
    .directive("controlLabel", controlLabel)
    .directive("helpBlock", helpBlock)
    .directive("formGroup", formGroup)
    .directive("dateSelector", dateSelector)
    .directive("formGroupError", formGroupError)
    .directive("formGroupErrorMessage", formGroupErrorMessage)
    .service("windowResizeService", WindowResizeService);
}
