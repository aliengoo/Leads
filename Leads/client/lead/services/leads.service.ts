///<reference path="../models/paged-filter-request.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../models/page.ts"/>

"use strict";

module lead {

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
