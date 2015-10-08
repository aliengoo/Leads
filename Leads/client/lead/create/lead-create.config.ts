///<reference path="lead-create.controller.ts"/>
///<reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts"/>

module lead {
  "use strict";

  export class LeadCreateConfig {


    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {

      var leadCreate: angular.ui.IState = {
        url: "/create",
        controller: LeadCreateController,
        controllerAs: "vm",
        template:
          `
            <div id="lead.create" class="container">
              <div class="col-sm-12">
                <header><h1>Create lead</h1></header>
              </div>

              <div class="col-sm-6">
                <header>
                  <h3>Customer details</h3>
                </header>
                <customer customer="vm.customer"></customer>
                <header>
                  <h3>Customer address</h3>
                </header>
                <address address="vm.customer.address"></address>
              </div>

              <div class="col-sm-6">
                <header>
                  <h3>Lead details</h3>
                </header>
                <lead-details lead="vm.lead"></lead-details>
              </div>
            </div>
          `
      };

      $stateProvider.state("lead.create", leadCreate);
    }
  }
}
