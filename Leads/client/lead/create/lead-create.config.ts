///<reference path="lead-create.controller.ts"/>
///<reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts"/>

module lead {
  "use strict";

  export class LeadCreateConfig {


    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {
      $stateProvider.state("lead.create", <angular.ui.IState>{
        controller: LeadCreateController,
        controllerAs: "vm",
        templateUrl: "lead/create/lead-create.html",
        url: "/create"
      });
    }
  }
}
