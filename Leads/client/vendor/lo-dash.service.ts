///<reference path="../../typings/tsd.d.ts"/>
module vendor {

  "use strict";

  export class LoDashService implements angular.IServiceProvider {

    public $get(): _.LoDashStatic {
      return (<any>window)._;
    }
  }
}
