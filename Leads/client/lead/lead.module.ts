///<reference path="../customer/customer.module.ts"/>
///<reference path="../ui/ui.module.ts"/>
///<reference path="lead.config.ts"/>
///<reference path="create/lead-create.config.ts"/>
///<reference path="edit/lead-edit.config.ts"/>
///<reference path="search-input/search-input.directive.ts"/>
///<reference path="lead-details/lead-details.directive.ts"/>
///<reference path="interests/interests.directive.ts"/>
///<reference path="list/list.config.ts"/>
///<reference path="list/list-sidebar/list-sidebar.directive.ts"/>
///<reference path="list/list-table/list-table.directive.ts"/>
///<reference path="list/list.service.ts"/>
///<reference path="lead.service.ts"/>

module lead {

  "use strict";

  angular.module("lead", [
      "ui.router",
      "leads.templates",
      "ui",
      "customer"
    ])
    .service("leadService", LeadService)
    .service("listService", ListService)
    .directive("interests", interests)
    .directive("leadDetails", leadDetails)
    .directive("listSidebar", listSidebar)
    .directive("listTable", listTable)
    .directive("searchInput", searchInput)
    .config(LeadConfig)
    .config(LeadCreateConfig)
    .config(LeadEditConfig)
    .config(ListConfig);
}
