///<reference path="form-group.scope.ts"/>
module ui {
  "use strict";

  export interface IFormGroupController {
    scope: IFormGroupScope;
    linkToParent(element: angular.IAugmentedJQuery, ngModel: angular.INgModelController): void;
  }

  export class FormGroupController implements IFormGroupController {

    public scope: IFormGroupScope;
    public invalid: boolean = false;
    private ngModelWatch: Function;

    /* @ngInject */
    constructor($scope: IFormGroupScope, private $timeout: angular.ITimeoutService) {
      this.scope = $scope;
    }

    public linkToParent(element: angular.IAugmentedJQuery, ngModel: angular.INgModelController): void {

      var me: FormGroupController = this;

      function deferredLinkToParent(): void {
        // clean up previous scope
        if (me.ngModelWatch) {
          me.ngModelWatch();
        }

        me.scope.element = element;
        me.scope.ngModel = ngModel;

        me.ngModelWatch = me.scope.$watch((): any => {

          // when pristine, don't apply any styling
          if (me.scope.ngModel.$pristine) {
            return null;
          }

          // don't style when empty and not required
          if (!me.scope.ngModel.$error.required && me.scope.ngModel.$isEmpty(me.scope.ngModel.$modelValue)) {
            return null;
          }

          // otherwise express validity
          return me.scope.ngModel.$invalid;
        }, (invalid?: boolean): void => {
          me.scope.childValidity = invalid;
        });
      }

      // defer.  deferredLinkToParent shouldn't run until other sync code has completed,
      // namely all the directive compilation
      this.$timeout(deferredLinkToParent);
    };
  }
}
