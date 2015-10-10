///<reference path="lead-create.controller.ts"/>
///<reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts"/>

module lead {
  "use strict";

  export class LeadCreateConfig {


    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {

      var t2: string = `
            <flex direction="row">
              <lead-create-sidebar></lead-create-sidebar>
              <flex-item grow="1">
                <flex direction="row">
                  <flex-item basis="33%">
                    <view-sub-header>
                      Customer details
                    </view-sub-header>
                    <customer customer="vm.customer"></customer>
                  </flex-item>
                  <flex-item basis="33%">
                    <view-sub-header>
                      Customer address
                    </view-sub-header>
                    <address address="vm.customer.address"></address>
                  </flex-item>
                  <flex-item basis="33%">
                    <view-sub-header>
                      Lead details
                    </view-sub-header>
                    <lead-details lead="vm.lead">
                    </lead-details>
                  </flex-item>
                </flex>
              </flex-item>
            </flex>
        `;

      var leadCreate: angular.ui.IState = {
        url: "/create",
        controller: LeadCreateController,
        controllerAs: "vm",
        template: t2
      };

      $stateProvider.state("lead.create", leadCreate);
    }
  }
}
