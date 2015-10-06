module ui {
  "use strict";

  export function dateSelector(): angular.IDirective {

    return {
      link: link,
      replace: true,
      restrict: "E",
      template: `
        <div>
          <input type="text" class="date-selector">
          <div class="date-selector-hover">
            Hello
          </div>
        </div>
      `
    };

    function link(scope: angular.IScope, element: angular.IAugmentedJQuery): void {

      var $input: JQuery = $(element).find("input");

      $($input).on("keydown", function onChange(e: JQueryEventObject): void {
        var actual: number = e.which || e.keyCode || 0;

        if (e.shiftKey) {
          console.log(`You press a CAPITAL letter with the code ${actual}`);
        } else {
          console.log(`You press a letter with the code ${actual}`);
        }
      });
    }
  }
}
