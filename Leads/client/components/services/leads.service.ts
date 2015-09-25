///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="../../models/models.d.ts"/>

"use strict";

import IPagedFilterRequest = leads.models.IPagedFilterRequest;
import IPage = leads.models.IPage;

module leads.components {

  export interface ILeadsService {
    retrieve(pagedFilterRequest: IPagedFilterRequest):angular.IPromise<IPage>;
  }

  export class LeadsService implements ILeadsService {

    /* @ngInject */
    constructor(private $http: angular.IHttpService, private $q: angular.IQService) {
    }

    retrieve(pagedFilterRequest: IPagedFilterRequest):angular.IPromise<IPage> {

      var defer = this.$q.defer();

      this.$http.post("api/leads", pagedFilterRequest).success((page:IPage):void => {
        defer.resolve(page);
      });

      return defer.promise;
    }
  }
}
