///<reference path="lead.controller.ts"/>
///<reference path="../../typings/angular-ui-router/angular-ui-router.d.ts"/>
"use strict";

module lead {
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
