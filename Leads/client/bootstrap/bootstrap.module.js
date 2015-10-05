///<reference path="help-block/help-block.directive.ts"/>
///<reference path="control-label/control-label.directive.ts"/>
///<reference path="form-group/form-group.directive.ts"/>
var bootstrap;
(function (bootstrap) {
    angular.module("bootstrap", [])
        .directive("controlLabel", controlLabel)
        .directive("helpBlock", helpBlock)
        .directive("formGroup", formGroup);
})(bootstrap = exports.bootstrap || (exports.bootstrap = {}));
