///<reference path="../../../typings/angularjs/angular.d.ts"/>
module lead {
  "use strict";

  export function leadInterests(): angular.IDirective {
    return {
      require: "^formGroup",
      restrict: "E",
      scope: {
        lead: "="
      },
      template: `
        <div>
          <form-group>
              <control-label>
                Interests
              </control-label>
              <input
                type="text"
                name="interests"
                ng-model="lead.interests"
                ng-model-options="{ debounce: 500 }"
                class="lead-details-interests"
                required
                form-group-error
                >
          </form-group>
        </div>
        `
    };
  }
}
