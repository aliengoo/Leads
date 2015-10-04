///<reference path="sandbox.controller.ts"/>
///<reference path="..\..\..\typings\angular-ui-router\angular-ui-router.d.ts"/>
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
