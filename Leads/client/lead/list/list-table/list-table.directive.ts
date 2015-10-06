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
      templateUrl: "lead/list/list-table/list-table.directive.html"
    };

    function link(scope: IListTableScope, element: angular.IAugmentedJQuery): void {
      console.log("list-table ready");
    }
  }
}
