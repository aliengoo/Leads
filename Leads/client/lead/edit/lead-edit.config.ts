///<reference path="lead-edit.controller.ts"/>
///<reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts"/>
"use strict";

module lead {
  export class LeadEditConfig {

    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {
      $stateProvider.state("lead.edit", <angular.ui.IState>{
        url: "/edit",
        controller: LeadEditController,
        controllerAs: "vm",
        templateUrl: "lead/edit/lead-edit.html"
      });
    }
  }
}
