///<reference path="leads.controller.ts"/>
///<reference path="..\..\..\typings\angular-ui-router\angular-ui-router.d.ts"/>
"use strict";

module leads.views.leads {
  export class LeadsConfig {

    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider){

      $stateProvider.state("leads", {
        url : "/leads",
        controller: LeadsController,
        controllerAs: "vm",
        templateUrl: "views/leads/leads.html"
      });
    }
  }
}
