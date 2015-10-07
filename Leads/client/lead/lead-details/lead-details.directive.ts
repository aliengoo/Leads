///<reference path="../../../typings/angularjs/angular.d.ts"/>

module lead {
  "use strict";

  export function leadDetails(): angular.IDirective {
    return {
      restrict: "E",
      scope: {
        lead: "="
      },
      template: `
          <div class="lead-details">
            <lead-interests lead="lead"></lead-interests>
            <lead-due-date lead="lead"></lead-due-date>
            <lead-notes lead="lead"></lead-notes>
          </div>
        `
    };
  }
}
