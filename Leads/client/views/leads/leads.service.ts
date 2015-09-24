///<reference path="../../../typings/tsd.d.ts"/>

"use strict";

module leads {

  export interface ILeadsService {
    retrieve(pagedFilterRequest: IPagedFilterRequest):angular.IPromise<IPage>;
  }

  export class LeadsService implements ILeadsService {

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
