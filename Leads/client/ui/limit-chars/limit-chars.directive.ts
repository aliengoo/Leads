///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="limit-chars-options.service.ts"/>
///<reference path="limit-chars-attributes.ts"/>

module ui {
  "use strict";

  /* @ngInject */
  export function limitChars(
    $timeout: angular.ITimeoutService,
    keyCodeInfoService: IKeyCodeInfoService,
    limitCharsOptionsService: ILimitCharsOptionsService): angular.IDirective {

    return {
      link: link,
      priority: -1,
      restrict: "A"
    };

    function link(scope: angular.IScope,
                  element: angular.IAugmentedJQuery,
                  attributes: ILimitCharsAttributes): void {

      $timeout(function(): void{
        var options: ILimitCharsOptions = limitCharsOptionsService.compile(attributes);

        $(element).on("keydown", function (ev: JQueryEventObject): void {

          var keyCodeInfo: IKeyCodeInfo = keyCodeInfoService.compile(ev);

          if (!limitCharsOptionsService.match(options, keyCodeInfo)) {
            ev.preventDefault();
          }

          scope.$apply();
        });

      }, 1000);
    }
  }
}
