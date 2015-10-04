///<reference path="leads.config.ts"/>
/// <reference path="./directives/leads-sidebar/leads-sidebar.directive.ts"/>
///<reference path="../../components/components.module.ts"/>

"use strict";

module leads.views.leads {
  var mod = angular.module("leads.views.leads", [
    'ui.router',
    'leads.components',
    'leads.templates']);

  mod.config(LeadsConfig);
  mod.directive("leadsSidebar", leadsSidebar);
}
