module ui {
  "use strict";

  export interface IFormGroupScope extends angular.IScope {
    childValidity?: boolean;
    ngModel?: angular.INgModelController;
  }
}
