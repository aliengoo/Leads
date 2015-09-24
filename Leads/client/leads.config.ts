///<reference path="../typings/tsd.d.ts"/>

"use strict";

module leads {
  export class LeadsConfig {

    /* @ngInject */
    constructor($urlRouterProvider: angular.ui.IUrlRouterProvider){

      $urlRouterProvider.otherwise("/leads");
    }
  }
}

