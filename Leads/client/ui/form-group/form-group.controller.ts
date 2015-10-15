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
    constructor($scope: IFormGroupScope,
                private $element: angular.IAugmentedJQuery,
                private $timeout: angular.ITimeoutService,
                private $log: angular.ILogService) {
      this.scope = $scope;
    }

    /**
     * Observations only occur when the form-group[observe] naked attribute is declared
     * @param observedElement - the element, a user input, that has an ngModel binding.
     */
    public observe(observedElement: angular.IAugmentedJQuery): void {

      var me: FormGroupController = this;

      function initObservations(): void {

        var name: string = observedElement.attr("name");

        if (angular.isUndefined(name)) {
          me.$log.error("An observed element requires and name attribute", observedElement);
          return;
        }

        if (me.scope.hasOwnProperty(name)) {
          me.$log.error(`There is already an element with the same name '${name}' attribute on this scope`);
          return;
        }

        var ngModel: angular.INgModelController = observedElement.controller("ngModel");


        if (angular.isUndefined(ngModel)) {
          me.$log.error(`Cannot observe '${observedElement.attr("name")}' because there is no ng-model controller`);
          return;
        }

        me.scope[name] = ngModel;

        // clean up previous scope
        if (me.ngModelWatch) {
          me.ngModelWatch();
        }

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

      // defer observe until after sync code has completed
      this.$timeout(initObservations);
    };
  }
}
