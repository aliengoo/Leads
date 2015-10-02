///<reference path="..\..\..\typings\tsd.d.ts"/>
///<reference path="sandbox.controller.ts"/>
"use strict";

module leads.views {

  export class SandboxConfig {
    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {
      $stateProvider.state("sandbox", {
        url: "/sandbox",
        controller: SandboxController,
        controllerAs: "vm",
        templateUrl: "views/sandbox/sandbox.html"
      });
    }

  }

}
