///<reference path="../../../../../typings/angularjs/angular.d.ts"/>
"use strict";

module leads.views.lead {
  export function leadDetails(): angular.IDirective {
    return {
      restrict: "E",
      scope: {
        lead: '='
      },
      templateUrl: "views/lead/directives/lead-details/lead-details.directives.html"
    };
  }
}