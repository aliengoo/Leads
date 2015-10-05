///<reference path="../typings/tsd.d.ts"/>
///<reference path="app.config.ts"/>
///<reference path="lead/lead.module.ts"/>


"use strict";

module leads {

  var dependencies:Array<string> = [
    "ngAria",
    "ngAnimate",
    "ui.router",
    "lead"
  ];

  angular.module("leads", dependencies)
    .config(AppConfig);
}


