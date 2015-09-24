///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="lead.controller.ts"/>

"use strict";

module leads {
  export class LeadConfig {
    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {
      $stateProvider.state("lead", {
        abstract: true,
        url: "/lead",
        templateUrl: "views/lead/lead.html",
        controller: LeadController,
        controllerAs: "vm"
      });
    }
  }
}
