///<reference path="../../../typings/tsd.d.ts"/>
module ui {
  "use strict";

  export interface IFormGroupScope extends angular.IScope {
    childValidity?: boolean;
    element?: angular.IAugmentedJQuery;
    ngModel?: angular.INgModelController;
  }
}
