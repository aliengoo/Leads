///<reference path="form-group.scope.ts"/>
module ui {
  "use strict";

  export interface IFormGroupController {
    scope: IFormGroupScope;
    setNgModel(ngModel: angular.INgModelController): angular.INgModelController;
  }

  export class FormGroupController implements IFormGroupController {

    public scope: IFormGroupScope;
    public invalid: boolean = false;
    private ngModelWatch: Function;

    /* @ngInject */
    constructor($scope: IFormGroupScope) {
      this.scope = $scope;
    }

    public setNgModel(ngModel: angular.INgModelController): angular.INgModelController {

      // clean up previous scope
      if (this.ngModelWatch) {
        this.ngModelWatch();
      }

      this.scope.ngModel = ngModel;

      this.ngModelWatch = this.scope.$watch((): any => {

        // when pristine, don't apply any styling
        if (this.scope.ngModel.$pristine) {
          return null;
        }

        // don't style when empty and not required
        if (!this.scope.ngModel.$error.required && this.scope.ngModel.$isEmpty(this.scope.ngModel.$modelValue)) {
          return null;
        }

        // otherwise express validity
        return this.scope.ngModel.$invalid;
      }, (invalid?: boolean): void => {
        this.scope.childValidity = invalid;
      });

      return ngModel;
    };
  }
}
