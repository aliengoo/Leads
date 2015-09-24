///<reference path="../typings/tsd.d.ts"/>

"use strict";

module leads {
  export class AppConfig {

    /* @ngInject */
    constructor($urlRouterProvider: angular.ui.IUrlRouterProvider){

      $urlRouterProvider.otherwise("/leads");
    }
  }
}

