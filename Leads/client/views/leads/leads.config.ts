///<reference path="leads.controller.ts"/>
"use strict";

module leads {
  export class LeadsConfig {

    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider){

      $stateProvider.state("leads", {
        url : "/leads",
        controller: LeadsController,
        templateUrl: "leads/leads.html"
      });
    }
  }
}
