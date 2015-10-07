///<reference path="../../../typings/angularjs/angular.d.ts"/>
module lead {
  "use strict";

  export function leadDueDate(): angular.IDirective {
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
                Due date
              </control-label>
              <input
                type="text"
                name="dueDate"
                ng-model="lead.dueDate"
                ng-model-options="{ debounce: 500 }"
                class="lead-details-due-date"
                required
                form-group-error
              >
            </form-group>
        </div>
        `
    };
  }
}
