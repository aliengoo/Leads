module vendor {
  "use strict";

  export class JQueryService implements angular.IServiceProvider {

    public $get(): JQueryStatic {
      return (<any>window).$;
    }
  }
}
