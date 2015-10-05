///<reference path="lead-create.controller.ts"/>
///<reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts"/>
"use strict";

module lead {
  export class LeadCreateConfig {

    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {
      $stateProvider.state("lead.create", <angular.ui.IState>{
        url: "/create",
        controller: LeadCreateController,
        controllerAs: "vm",
        templateUrl: "lead/create/lead-create.html"
      });
    }
  }
}
