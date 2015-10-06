///<reference path="../../typings/angularjs/angular-mocks.d.ts"/>


module lead {
  "use strict";

  angular.module("lead").run(run);

  /* @ngInject */
  function run($httpBackend: angular.IHttpBackendService): void {
    console.log("Test");
  }
}
