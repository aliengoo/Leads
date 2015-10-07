///<reference path="../../../typings/angularjs/angular.d.ts"/>
module lead {
  "use strict";

  export function leadNotes(): angular.IDirective {
    return {
      restrict: "E",
      scope: {
        lead: "="
      },
      template:
        `<div>
          <form-group>
              <control-label>Notes</control-label>
              <textarea
                name="notes"
                cols="30"
                rows="10"
                ng-model="lead.notes"
                ng-model-options="{ debounce: 500 }"
                class="lead-details-notes">
              </textarea>
            </form-group>
        </div>
        `
    };
  }
}
