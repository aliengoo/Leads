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
            <div>
              <flex direction="column">
                <flex direction="row" justify="center">
                  <view-header>
                    Create lead
                  </view-header>
                </flex-row>

                <flex direction="row">
                  <flex-item>
                     <view-sub-header>
                        Customer details
                     </view-sub-header>

                     <customer customer="vm.customer"></customer>
                  </flex-item>
                  <flex-item>
                    <view-sub-header>
                      Customer address
                    </view-sub-header>

                    <address address="vm.customer.address"></address>
                  </flex-item>
                  <flex-item>
                     <view-sub-header>
                      Lead details
                     </view-sub-header>

                     <lead-details lead="vm.lead"></lead-details>
                  </flex-item>
                </flex>
              </flex>

            </div>
          `
      };

      $stateProvider.state("lead.create", leadCreate);
    }
  }
}
