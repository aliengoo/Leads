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
        template:
          `
            <flex-container>
              <list-sidebar></list-sidebar>
              <main-content>
                <header>
                  <h1>Leads</h1>
                </header>
                <list-table></list-table>
              </main-content>
            </flex-container>
          `,
        url: "/list"
      });
    }
  }
}
