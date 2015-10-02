/// <reference path="../../../../typings/tsd.d.ts"/>

"use strict";

module leads.components {
  export function clearfix(): angular.IDirective {
    return {
      restrict: "E",
      template: "<div style='clear:both;'></div>"
    };
  }
}
