/// <reference path="../../../typings/tsd.d.ts"/>


module ui {
  "use strict";

  export function clearfix(): angular.IDirective {
    return {
      restrict: "E",
      template: "<div style='clear:both;'></div>"
    };
  }
}
