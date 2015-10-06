///<reference path="../typings/tsd.d.ts"/>

module leads {
  "use strict";

  export class AppConfig {

    /* @ngInject */
    constructor($urlRouterProvider: angular.ui.IUrlRouterProvider) {
      $urlRouterProvider.otherwise("/lead/list");
    }
  }
}

