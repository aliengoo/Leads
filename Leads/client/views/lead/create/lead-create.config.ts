///<reference path="../../../../typings/tsd.d.ts"/>

///<reference path="lead-create.controller.ts"/>
"use strict";

module leads.views {
  export class LeadCreateConfig {

    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {
      $stateProvider.state("lead.create", {
        url: "/create",
        controller: LeadCreateController,
        controllerAs: "vm",
        templateUrl: "views/lead/create/lead-create.html"
      });
    }
  }
}
