///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../vendor/vendor.module.ts"/>
///<reference path="clearfix/clearfix.directive.ts"/>
///<reference path="flex-container/flex-container.directive.ts"/>
///<reference path="main-content/main-content.directive.ts"/>
///<reference path="window-resize/window-resize.service.ts"/>
///<reference path="sidebar/sidebar.directive.ts"/>
///<reference path="control-label/control-label.directive.ts"/>
///<reference path="help-block/help-block.directive.ts"/>
///<reference path="form-group/form-group.directive.ts"/>
///<reference path="date-selector/date-selector.directive.ts"/>
///<reference path="key-codes/key-code-info.service.ts"/>
///<reference path="limit-chars/limit-chars-options.service.ts"/>
///<reference path="limit-chars/limit-chars.directive.ts"/>
///<reference path="key-codes/key-codes.ts"/>
///<reference path="key-codes/special-key-codes.ts"/>
///<reference path="key-codes/modifier-key-codes.ts"/>
///<reference path="key-codes/numeric-key-codes.ts"/>
///<reference path="key-codes/letter-key-codes.ts"/>
///<reference path="view-header/view-header.directive.ts"/>
///<reference path="view-sub-header/view-sub-header.directive.ts"/>


module ui {
  "use strict";

  angular.module("ui", ["ngMessages", "ngAnimate", "vendor"])
    .constant("keyCodes", KeyCodes)
    .constant("specialKeyCodes", specialKeyCodes())
    .constant("modifierKeyCodes", modifierKeyCodes())
    .constant("numericKeyCodes", numericKeyCodes())
    .constant("letterKeyCodes", letterKeyCodes())

    .directive("clearfix", clearfix)
    .directive("flexContainer", flexContainer)
    .directive("mainContent", mainContent)
    .directive("sidebar", sidebar)
    .directive("controlLabel", controlLabel)
    .directive("helpBlock", helpBlock)
    .directive("formGroup", formGroup)
    .directive("limitChars", limitChars)
    .directive("viewHeader", viewHeader)
    .directive("viewSubHeader", viewSubHeader)

    .service("keyCodeInfoService", KeyCodeInfoService)
    .service("limitCharsOptionsService", LimitCharsOptionsService)
    .service("windowResizeService", WindowResizeService);
}
