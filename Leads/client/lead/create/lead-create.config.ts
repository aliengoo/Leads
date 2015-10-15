///<reference path="lead-create.controller.ts"/>
///<reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts"/>
///<reference path="lead-create.template.ts"/>

module lead {
  "use strict";

  export class LeadCreateConfig {


    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {

      var leadCreate: angular.ui.IState = {
        url: "/create",
        controller: LeadCreateController,
        controllerAs: "vm",
        template: leadCreateTemplate()
      };

      $stateProvider.state("lead.create", leadCreate);
    }
  }
}
