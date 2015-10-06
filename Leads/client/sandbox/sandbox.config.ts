///<reference path="sandbox.controller.ts"/>
///<reference path="../../typings/angular-ui-router/angular-ui-router.d.ts"/>

module sandbox {
  "use strict";

  export class SandboxConfig {

    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {
      $stateProvider.state("sandbox", {
        controller: SandboxController,
        controllerAs: "vm",
        templateUrl: "sandbox/sandbox.html",
        url: "/sandbox"
      });
    }
  }
}
