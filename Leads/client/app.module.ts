///<reference path="../typings/tsd.d.ts"/>
///<reference path="app.config.ts"/>
///<reference path="lead/lead.module.ts"/>

module leads {
  "use strict";

  var dependencies: Array<string> = [
    "ngAria",
    "ngAnimate",
    "ui.router",
    "lead"
  ];

  angular.module("leads", dependencies)
    .config(AppConfig);
}


