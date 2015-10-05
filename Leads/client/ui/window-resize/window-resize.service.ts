///<reference path="../../../typings/angularjs/angular.d.ts"/>
"use strict";

module ui {

  export interface IWindowSize {
    w: number;
    h: number;
  }

  export interface IWindowResizeFunc {
    (windowSize:IWindowSize): void
  }

  export interface IWindowResizeService {
    registerObserver(name:string, windowResizeFunc:IWindowResizeFunc): void;
    deregisterObserver(name:string): void;
  }

  export class WindowResizeService implements IWindowResizeService {

    private observers:any;
    private w:angular.IAugmentedJQuery;
    private bound:boolean;
    private throttleTimeout:angular.IPromise<any>;
    private lastWindowSize:IWindowSize;

    /* @ngInject */
    constructor(private $window:angular.IWindowService, private $timeout:angular.ITimeoutService) {
      this.w = angular.element($window);
      this.observers = {};
    }

    registerObserver(name:string, windowResizeFunc:IWindowResizeFunc):void {

      var me = this;

      if(!me.bound) {
        me.w.bind("resize", ():void => {

          if(me.throttleTimeout) {
            me.$timeout.cancel(me.throttleTimeout);
          }

          me.throttleTimeout = me.$timeout(():void => {

            var windowSize:IWindowSize = {
              w: $(me.$window).width(),
              h: $(me.$window).height()
            };

            Object.keys(me.observers).forEach((observer):void => {
              me.observers[observer](windowSize);
            });

            me.$timeout.cancel(me.throttleTimeout);
            me.throttleTimeout = undefined;

          }, 500);
        });

        me.bound = true;
      }

      me.observers[name] = windowResizeFunc;
    }

    deregisterObserver(name:string):void {
      delete this.observers[name];
    }
  }
}

