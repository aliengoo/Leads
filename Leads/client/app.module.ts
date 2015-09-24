///<reference path="../typings/tsd.d.ts"/>

///<reference path="views\lead\lead.config.ts"/>
///<reference path="views\leads\leads.config.ts"/>
///<reference path="views\lead\edit\lead-edit.config.ts"/>
///<reference path="views\lead\create\lead-create.config.ts"/>
///<reference path="app.config.ts"/>

"use strict";

module leads {

  var dependencies:Array<string> = [
    "ngAria",
    "ngAnimate",
    "ngMessages",
    "ui.router",
    "leads.templates"
  ];

  angular.module("leads", dependencies)
    .config(AppConfig)
    .config(LeadsConfig)
    .config(LeadConfig)
    .config(LeadEditConfig)
    .config(LeadCreateConfig);

}


