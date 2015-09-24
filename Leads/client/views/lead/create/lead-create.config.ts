///<reference path="../../../../typings/tsd.d.ts"/>

///<reference path="lead-create.controller.ts"/>
"use strict";

module leads {
  export class LeadCreateConfig {

    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {
      $stateProvider.state("lead.create", {
        url: "/edit",
        controller: LeadCreateController,
        controllerAs: "vm"
      });
    }
  }
}
