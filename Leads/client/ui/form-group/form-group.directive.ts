///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="form-group.controller.ts"/>
///<reference path="form-group.scope.ts"/>

module ui {
  "use strict";


  /* @ngInject */
  export function formGroup($log: angular.ILogService): angular.IDirective {
    return {
      bindToController: true,
      controller: FormGroupController,
      link: link,
      require: "formGroup",
      restrict: "E",
      template: `
        <div
          class="form-group"
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

      // when decorate
      if (element[0].hasAttribute("observe")) {
        formGroupController.observe(ngTarget);
      }
    }
  }
}
