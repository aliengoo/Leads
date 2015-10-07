///<reference path="../../../../typings/angularjs/angular.d.ts"/>
///<reference path="../form-group.controller.ts"/>
module ui {
  "use strict";

  export function formGroupError(): angular.IDirective {
    return {
      link: link,
      require: ["^formGroup", "ngModel"],
      restrict: "A"
    };

    function link(
      scope: angular.IScope,
      element: angular.IAugmentedJQuery,
      attributes: angular.IAttributes,
      controllers: Array<any>): void {

      var formGroup: IFormGroupController = controllers[0];
      var ngModel: angular.INgModelController = controllers[1];

      formGroup.setNgModel(ngModel);
    }
  }
}
