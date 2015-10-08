///<reference path="lead-edit.controller.ts"/>
///<reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts"/>

module lead {
  "use strict";

  export class LeadEditConfig {

    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {

      var editState: angular.ui.IState = {
        url: "/edit",
        controller: LeadEditController,
        controllerAs: "vm",
        template: `
          <div id="lead.edit">
            <header><h1>Edit Lead</h1></header>
          </div>
        `
      };

      $stateProvider.state("lead.edit", editState);
    }
  }
}
