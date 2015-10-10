///<reference path="../../../typings/angularjs/angular.d.ts"/>
module lead {
  "use strict";

  export function leadCreateSidebar(): angular.IDirective {
    return {
      restrict: "E",
      replace: true,
      template: `
            <div>
            <flex-item basis="max-content">
               <sidebar>
                <sidebar-header>
                  <h3>Create Lead</h3>
                </sidebar-header>
                <sidebar-content>
                </sidebar-content>
               </sidebar>
            </flex-item>
            </div>
        `
    };
  }
}
