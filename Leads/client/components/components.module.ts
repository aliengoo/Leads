///<reference path="../../typings/tsd.d.ts"/>

///<reference path="filters\customer-to-string.filter.ts"/>
///<reference path="services\leads.service.ts"/>
///<reference path="../models/models.d.ts"/>
///<reference path="directives\address-type\address-type.directive.ts"/>
///<reference path="bootstrap\form-group\form-group.directive.ts"/>
///<reference path="bootstrap\control-label\control-label.directive.ts"/>
///<reference path="directives\sidebar\sidebar.directive.ts"/>
///<reference path="directives\sidebar\sidebar-state.service.ts"/>
///<reference path="directives\clearfix\clearfix.directive.ts"/>
///<reference path="directives\flex-container\flex-container.directive.ts"/>
///<reference path="directives\main-content\main-content.directive.ts"/>
///<reference path="directives\search-input\search-input.directive.ts"/>
///<reference path="bootstrap\help-block\help-block.directive.ts"/>
///<reference path="directives/address/address.directive.ts"/>
///<reference path="directives/customer/customer.directive.ts"/>

"use strict";

module leads.components {
  var leadComponents = angular.module("leads.components", ["ui.router", "ngStorage", "leads.models"]);

  // directives
  leadComponents
    .directive("formGroup", formGroup)
    .directive("controlLabel", controlLabel)
    .directive("helpBlock", helpBlock)
    .directive("addressType", addressType)
    .directive("sidebar", sideBar)
    .directive("clearfix", clearfix)
    .directive("mainContent", mainContent)
    .directive("flexContainer", flexContainer)
    .directive("customer", customer)
    .directive("address", address)
    .directive("searchInput", searchInput);

  // filters
  leadComponents.filter("customerToString", customerToString);

  // services
  leadComponents
    .service("leadsService", LeadsService)
    .service("sidebarStateService", SidebarStateService)
    .service("windowResizeService", WindowResizeService);
}
