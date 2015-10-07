///<reference path="../../../../typings/angularjs/angular.d.ts"/>
module lead {
  "use strict";

  interface IListTableScope extends angular.IScope {
    leads: Array<ILead>;

    page(): void;
  }

  export function listTable(): angular.IDirective {
    return {
      link: link,
      restrict: "E",
      scope: {
        leads: "="
      },
      template:
        `
          <div class="list-table">
            <table class="table table-hover">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Customer</td>
                  <td>Status</td>
                  <td>Created</td>
                </tr>
              </thead>
              <tbody>
                <tr ng-repeat="lead in leads">
                  <td>{{lead.id}}</td>
                  <td>{{lead.customer | customerToString}}</td>
                  <td>{{lead.status}}</td>
                  <td>{{lead.created}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
    };

    function link(scope: IListTableScope, element: angular.IAugmentedJQuery): void {

    }
  }
}
