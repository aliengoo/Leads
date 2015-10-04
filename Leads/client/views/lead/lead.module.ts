///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="../../components/components.module.ts"/>
///<reference path="lead.config.ts"/>
///<reference path="create/lead-create.config.ts"/>
///<reference path="edit/lead-edit.config.ts"/>
///<reference path="directives/lead-details/lead-details.directives.ts"/>

"use strict";

module leads.views.lead {
  var mod = angular.module("leads.views.lead", [
    'ui.router',
    'leads.components',
    'leads.templates']);

  mod
    .config(LeadConfig)
    .config(LeadCreateConfig)
    .config(LeadEditConfig);

  mod.directive(leadDetails);
}