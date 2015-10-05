///<reference path="..\..\..\typings\angular-ui-router\angular-ui-router.d.ts"/>
///<reference path="list.controller.ts"/>
"use strict";

module lead {
  export class ListConfig {

    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider){

      $stateProvider.state("leads", {
        url : "/leads",
        controller: ListController,
        controllerAs: "vm",
        templateUrl: "leads/list/list.html"
      });
    }
  }
}
