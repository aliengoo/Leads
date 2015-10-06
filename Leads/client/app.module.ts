///<reference path="../typings/tsd.d.ts"/>
///<reference path="app.config.ts"/>
///<reference path="lead/lead.module.ts"/>
///<reference path="sandbox/sandbox.module.ts"/>
module leads {
  "use strict";

  var dependencies: Array<string> = [
    "ngAria",
    "ngAnimate",
    "ui.router",
    "sandbox",
    "lead"
  ];

  angular.module("leads", dependencies)
    .config(AppConfig);
}


