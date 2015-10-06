///<reference path="lead-edit.controller.ts"/>
///<reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts"/>

module lead {
  "use strict";

  export class LeadEditConfig {

    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {
      $stateProvider.state("lead.edit", <angular.ui.IState>{
        controller: LeadEditController,
        controllerAs: "vm",
        templateUrl: "lead/edit/lead-edit.html",
        url: "/edit"
      });
    }
  }
}
