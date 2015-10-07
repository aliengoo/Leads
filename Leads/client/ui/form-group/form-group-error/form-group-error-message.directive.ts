///<reference path="../../../../typings/angularjs/angular.d.ts"/>
///<reference path="../form-group.scope.ts"/>
///<reference path="../form-group.controller.ts"/>
module ui {
  "use strict";

  export function formGroupErrorMessage($compile: angular.ICompileService): angular.IDirective {



    return {
      link: link,
      require: "^formGroup",
      template:
        `<div class="form-group-error-message">
          <ng-messages="ngModel.$error">
          </ng-messages>
        </div>`
    };

    function link(
      scope: IFormGroupScope,
      element: angular.IAugmentedJQuery,
      attributes: angular.IAttributes,
      formGroupController: IFormGroupController,
      transclude: angular.ITranscludeFunction): void {

      // built-in errors
      // email, required, url, date, min length, max length, pattern
      var $ngMessages: JQuery = find("ng-messages");

      var $ngMessagesContent: angular.IAugmentedJQuery = angular.element("div");

      transclude(scope, function (clone: angular.IAugmentedJQuery): void {
        angular.forEach(clone, function (cloneChild: angular.IAugmentedJQuery): void {

          /* tslint: disable */
           cloneChild["localName"];
          /* tslint: enable */
        });
      });



      function find(selector: string): JQuery {
        return $(element).find(selector);
      }
    }
  }
}
