///<reference path="leads.controller.ts"/>
"use strict";

module leads.views {
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
