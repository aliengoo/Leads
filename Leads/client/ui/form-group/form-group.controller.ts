///<reference path="form-group.scope.ts"/>
module ui {
  "use strict";

  export interface IFormGroupController {
    scope: IFormGroupScope;
    observe(observedElement: angular.IAugmentedJQuery): void;
  }

  export class FormGroupController implements IFormGroupController {

    public scope: IFormGroupScope;
    public invalid: boolean = false;
    private ngModelWatch: Function;

    /* @ngInject */
    constructor(
      $scope: IFormGroupScope,
      private $element: angular.IAugmentedJQuery,
      private $timeout: angular.ITimeoutService) {
      this.scope = $scope;
    }

    public observe(observedElement: angular.IAugmentedJQuery): void {

      var me: FormGroupController = this;

      function deferredLinkToParent(): void {

        // clean up previous scope
        if (me.ngModelWatch) {
          me.ngModelWatch();
        }

        var ngModel: angular.INgModelController = observedElement.controller("ngModel");

        me.ngModelWatch = me.scope.$watch((): any => {
          return ngModel.$viewValue;
        }, (value?: any): void => {

          me.$element.removeClass("has-error");
          me.$element.removeClass("has-success");

          // when pristine, don't apply any styling
          if (ngModel.$pristine) {
            return null;
          }

          // don't style when empty and not required
          if (!ngModel.$error.required && ngModel.$isEmpty(value)) {
            return null;
          }

          me.$element.addClass(ngModel.$invalid === true ? "has-error" : "has-success");
        });
      }

      // defer.  deferredLinkToParent shouldn't run until other sync code has completed,
      // namely all the directive compilation
      this.$timeout(deferredLinkToParent);
    };
  }
}
