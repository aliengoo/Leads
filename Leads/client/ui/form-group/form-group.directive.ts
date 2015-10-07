///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="form-group.controller.ts"/>
///<reference path="form-group.scope.ts"/>

module ui {
  "use strict";

  /* @ngInject */
  export function formGroup($log: angular.ILogService): angular.IDirective {
    return {
      controller: FormGroupController,
      link: link,
      replace: true,
      require: "formGroup",
      restrict: "E",
      template: `
        <div
          class="form-group"
          ng-class="{'has-error': childValidity === true, 'has-success': childValidity === false}"
          ng-transclude>
        </div>`,
      transclude: true
    };

    function link(scope: IFormGroupScope,
                  element: angular.IAugmentedJQuery,
                  attributes: angular.IAttributes,
                  formGroupController: IFormGroupController): void {

      var targets: JQuery = $(element).find("input, select, textarea");

      if (targets.length === 0) {
        return;
      }

      if (targets.length > 1) {
        $log.error("Sorry, form-group can only accommodate one input, select or textarea.");
        return;
      }

      var ngTarget: angular.IAugmentedJQuery = angular.element(targets[0]);
      ngTarget.addClass("form-control");

      var ngModel: angular.INgModelController = ngTarget.controller("ngModel");

      if (angular.isUndefined(ngModel)) {
        $log.error("There was not ng-model controller available");
        return;
      }

      formGroupController.linkToParent(ngTarget, ngModel);
    }
  }
}
