///<reference path="../../typings/tsd.d.ts"/>
module vendor {

  "use strict";

  export class MomentService implements angular.IServiceProvider {

    public $get(): moment.MomentStatic {
      return (<any>window).moment;
    }
  }
}
