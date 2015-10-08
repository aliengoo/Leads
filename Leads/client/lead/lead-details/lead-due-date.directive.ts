///<reference path="../../../typings/angularjs/angular.d.ts"/>
module lead {
  "use strict";

  export function leadDueDate(): angular.IDirective {
    return {
      restrict: "E",
      scope: {
        lead: "="
      },
      template: `
        <div>
          <form-group observe>
            <control-label>
              Due date
            </control-label>
            <input
              type="text"
              name="dueDate"
              ng-model="lead.dueDate"
              ng-model-options="{ debounce: 500 }"
              class="lead-details-due-date"
              required
              >
            </form-group>
        </div>
        `
    };
  }
}

