///<reference path="../typings/tsd.d.ts"/>
///<reference path="app.config.ts"/>
///<reference path="models\models.d.ts"/>
///<reference path="components\components.module.ts"/>
///<reference path="views\views.module.ts"/>

"use strict";

module leads {

  var dependencies:Array<string> = [
    "ngAria",
    "ngAnimate",
    "ui.router",
    "leads.views"
  ];

  angular.module("leads", dependencies)
    .config(AppConfig);
}


