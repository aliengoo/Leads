module lead {
  "use strict";

  export interface IListService {
    retrieve(pagedFilterRequest: IPagedFilterRequest): angular.IPromise<IPage>;
  }

  export class ListService implements IListService {

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
