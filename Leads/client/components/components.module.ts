///<reference path="../../typings/tsd.d.ts"/>

///<reference path="filters\customer-to-string.filter.ts"/>
///<reference path="services\leads.service.ts"/>
///<reference path="../models/models.d.ts"/>
///<reference path="directives\address-type\address-type.directive.ts"/>
///<reference path="bootstrap\navbar\navbar.directive.ts"/>
///<reference path="bootstrap\form-group\form-group.directive.ts"/>
///<reference path="bootstrap\control-label\control-label.directive.ts"/>
///<reference path="directives\sidebar\sidebar.directive.ts"/>

"use strict";

module leads.components {
  var leadComponents = angular.module("leads.components", ["ui.router", "ngStorage", "leads.models"]);

  // directives
  leadComponents
    .directive("navbar", navbar)
    .directive("formGroup", formGroup)
    .directive("controlLabel", controlLabel)
    .directive("addressType", addressType)
    .directive("sidebar", sideBar);

  // filters
  leadComponents.filter("customerToString", customerToString);

  // services
  leadComponents.service("leadsService", LeadsService);
}
