///<reference path="../models/models.d.ts"/>
///<reference path="../components/components.module.ts"/>
///<reference path="leads/leads-view-leads.d.ts"/>

"use strict";

module leads.views {

  var dependencies = [
    "ui.router",
    "leads.views.leads",
    "leads.views.lead",
    "leads.views.sandbox",
    "leads.templates",
    "leads.models",
    "leads.components"
  ];

  angular.module("leads.views", dependencies);

}
