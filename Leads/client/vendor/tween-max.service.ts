module vendor {
  "use strict";

  export class TweenMaxService implements angular.IServiceProvider {

    public $get(): TweenMax {
      return (<any>window).TweenMax;
    }
  }
}
