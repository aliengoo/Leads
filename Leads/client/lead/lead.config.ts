///<reference path="lead.controller.ts"/>
///<reference path="../../typings/angular-ui-router/angular-ui-router.d.ts"/>

module lead {
  "use strict";

  export class LeadConfig {
    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {

      var leadState: angular.ui.IState = {
        abstract: true,
        url: "/lead",
        controller: LeadController,
        controllerAs: "vm",
        template:
          `
            <div><ui-view></ui-view></div>
          `
      };

      $stateProvider.state("lead", leadState);
    }
  }
}
