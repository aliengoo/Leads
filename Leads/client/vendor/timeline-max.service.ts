///<reference path="../../typings/tsd.d.ts"/>
module vendor {
  "use strict";

  export class TimelineMaxService implements angular.IServiceProvider {

    public $get(): TimelineMax {
      return (<any>window).TimelineMax;
    }
  }
}
