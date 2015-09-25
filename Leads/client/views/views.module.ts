///<reference path="leads\leads.config.ts"/>
///<reference path="lead\lead.config.ts"/>
///<reference path="lead\edit\lead-edit.config.ts"/>
///<reference path="lead\create\lead-create.config.ts"/>
///<reference path="../models/models.d.ts"/>
///<reference path="../components/components.module.ts"/>



"use strict";

module leads.views {

  var dependencies = [
    "ui.router",
    "leads.templates",
    "leads.models",
    "leads.components"
  ];

  angular.module("leads.views", dependencies)
    .config(LeadsConfig)
    .config(LeadConfig)
    .config(LeadEditConfig)
    .config(LeadCreateConfig);

}
