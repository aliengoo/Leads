///<reference path="lead.controller.ts"/>
///<reference path="../../typings/angular-ui-router/angular-ui-router.d.ts"/>

module lead {
  "use strict";

  export class LeadConfig {
    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {
      $stateProvider.state("lead", <angular.ui.IState>{
        abstract: true,
        controller: LeadController,
        controllerAs: "vm",
        templateUrl: "lead/lead.html",
        url: "/lead"
      });
    }
  }
}
