///<reference path="..\..\..\typings\angular-ui-router\angular-ui-router.d.ts"/>
///<reference path="list.controller.ts"/>

module lead {
  "use strict";

  export class ListConfig {

    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {

      $stateProvider.state("lead.list", {
        controller: ListController,
        controllerAs: "vm",
        templateUrl: "lead/list/list.html",
        url: "/list"
      });
    }
  }
}
