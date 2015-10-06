///<reference path="../models/paged-filter-request.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../models/page.ts"/>

module lead {
  "use strict";

  export interface ILeadsService {
    retrieve(pagedFilterRequest: IPagedFilterRequest): angular.IPromise<IPage>;
  }

  export class LeadsService implements ILeadsService {

    /* @ngInject */
    constructor(private $http: angular.IHttpService, private $q: angular.IQService) {
    }

    public retrieve(pagedFilterRequest: IPagedFilterRequest): angular.IPromise<IPage> {

      var defer: angular.IDeferred<IPage> = this.$q.defer();

      this.$http.post("api/leads", pagedFilterRequest).success((page: IPage): void => {
        defer.resolve(page);
      });

      return defer.promise;
    }
  }
}
