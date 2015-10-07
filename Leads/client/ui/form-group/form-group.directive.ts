///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="form-group.controller.ts"/>
///<reference path="form-group.scope.ts"/>

module ui {
  "use strict";

  export function formGroup(): angular.IDirective {
    return {
      controller: FormGroupController,
      link: link,
      replace: true,
      restrict: "E",
      template: `
        <div
          class="form-group"
          ng-class="{'has-error': childValidity === true, 'has-success': childValidity === false}"
          ng-transclude>
        </div>`,
      transclude: true
    };

    function link(scope: IFormGroupScope, element: angular.IAugmentedJQuery): void {
      $(element).find("input, select, textarea").addClass("form-control");
    }
  }
}
