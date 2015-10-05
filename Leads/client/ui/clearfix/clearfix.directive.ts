/// <reference path="../../../typings/tsd.d.ts"/>

"use strict";

module ui {
  export function clearfix(): angular.IDirective {
    return {
      restrict: "E",
      template: "<div style='clear:both;'></div>"
    };
  }
}
