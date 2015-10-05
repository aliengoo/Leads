///<reference path="../bootstrap/bootstrap.module.ts"/>
///<reference path="../customer/customer.module.ts"/>
///<reference path="../ui/ui.module.ts"/>
///<reference path="lead.config.ts"/>
///<reference path="create/lead-create.config.ts"/>
///<reference path="edit/lead-edit.config.ts"/>
///<reference path="search-input/search-input.directive.ts"/>
///<reference path="lead-details/lead-details.directive.ts"/>
///<reference path="interests/interests.directive.ts"/>
///<reference path="list/list.config.ts"/>
///<reference path="services/leads.service.ts"/>
///<reference path="services/lead.service.ts"/>


"use strict";

module lead {
  angular.module("lead", [
    'ui.router',
    'leads.templates',
    'bootstrap',
    'customer',
    'ui'
  ])
    .service("leadsService", LeadsService)
    .service("leadService", LeadService)
    .directive("interests", interests)
    .directive("leadDetails", leadDetails)
    .directive("listSidebar", listSidebar)
    .directive("searchInput", searchInput)
    .config(LeadConfig)
    .config(LeadCreateConfig)
    .config(LeadEditConfig)
    .config(ListConfig);

}