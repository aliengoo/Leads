///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="lead.controller.ts"/>
"use strict";

module leads.views.lead {
  export class LeadConfig {
    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {
      $stateProvider.state("lead", <angular.ui.IState>{
        abstract: true,
        url: "/lead",
        templateUrl: "views/lead/lead.html",
        controller: LeadController,
        controllerAs: "vm"
      });
    }
  }
}
