///<reference path="../../../../typings/angularjs/angular.d.ts"/>

module lead {
  "use strict";

  export function listSidebar(): angular.IDirective {
    return {
      restrict: "E",
      template:
        `
          <div>
            <sidebar>
              <sidebar-header>
                <header>
                  <h3>Leads</h3>
                </header>
              </sidebar-header>

              <sidebar-content>
                <form name="leadsSidebarForm">
                  <search-input></search-input>
                </form>
                <ul class="sidebar-list">
                  <li class="leads-sidebar-list-item">
                    <a href="/#/lead/create">Create lead</a>
                  </li>
                </ul>
              </sidebar-content>
            </sidebar>
          </div>
        `
    };
  }
}
