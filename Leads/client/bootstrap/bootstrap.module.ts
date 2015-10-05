///<reference path="help-block/help-block.directive.ts"/>
///<reference path="control-label/control-label.directive.ts"/>
///<reference path="form-group/form-group.directive.ts"/>


module bootstrap {
  angular.module("bootstrap", [])
    .directive("controlLabel", controlLabel)
    .directive("helpBlock", helpBlock)
    .directive("formGroup", formGroup);
}