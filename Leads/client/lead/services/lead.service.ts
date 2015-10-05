///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../models/lead.ts"/>
"use strict";

module lead {
  export interface ILeadService {
    retrieve(): angular.IPromise<ILead>
  }

  export class LeadService implements ILeadService{

    constructor(private $q: angular.IQService) {

    }

    retrieve(): angular.IPromise<ILead> {

      // TODO: Implement LeadService.retrieve
      return this.$q.when(<ILead>{});
    }
  }
}
