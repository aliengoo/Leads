///<reference path="views\lead\lead.config.ts"/>


"use strict";

module leads {

  var dependencies:Array<string> = [
    "ngAria",
    "ngAnimate",
    "ngMessages",
    "ngMockE2E",
    "ui.router"
  ];

  angular.module("leads", dependencies)
    .config(LeadsConfig)
    .config(LeadConfig)
    .config(LeadEditConfig)
    .config(LeadCreateConfig);

}


