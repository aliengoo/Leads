///<reference path="../../../typings/angularjs/angular.d.ts"/>

module ui {
  "use strict";

  export interface IWindowSize {
    h: number;
    w: number;
  }

  export interface IWindowResizeFunc {
    (windowSize: IWindowSize): void;
  }

  export interface IWindowResizeService {
    registerObserver(name: string, windowResizeFunc: IWindowResizeFunc): void;
    deregisterObserver(name: string): void;
  }

  export class WindowResizeService implements IWindowResizeService {

    private observers: any;
    private w: angular.IAugmentedJQuery;
    private bound: boolean;
    private throttleTimeout: angular.IPromise<any>;

    /* @ngInject */
    constructor(private $window: angular.IWindowService, private $timeout: angular.ITimeoutService) {
      this.w = angular.element($window);
      this.observers = {};
    }

    public registerObserver(name: string, windowResizeFunc: IWindowResizeFunc): void {

      var me: WindowResizeService = this;

      if (!me.bound) {
        me.w.bind("resize", (): void => {

          if (me.throttleTimeout) {
            me.$timeout.cancel(me.throttleTimeout);
          }

          me.throttleTimeout = me.$timeout(
            (): void => {

            var windowSize: IWindowSize = {
              h: $(me.$window).height(),
              w: $(me.$window).width()
            };

            Object.keys(me.observers).forEach((observer: string): void => {
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

    public deregisterObserver(name: string): void {
      delete this.observers[name];
    }
  }
}

