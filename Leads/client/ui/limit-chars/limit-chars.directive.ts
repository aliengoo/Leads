///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../key-codes/key-codes.ts"/>
module ui {
  "use strict";

  interface ILimitCharsAttributes extends angular.IAttributes {
    limitChars: string;
  }

  export function limitChars(): angular.IDirective {

    const always: Array<number> = [
      KeyCodes.alt,
      KeyCodes.backspace,
      KeyCodes.ctrl,
      KeyCodes.del,
      KeyCodes.downArrow,
      KeyCodes.end,
      KeyCodes.home,
      KeyCodes.insert,
      KeyCodes.leftArrow,
      KeyCodes.pageDown,
      KeyCodes.pageUp,
      KeyCodes.rightArrow,
      KeyCodes.shift,
      KeyCodes.tab,
      KeyCodes.upArrow
    ];

    const numericKeys: Array<number> = [
      KeyCodes.number0,
      KeyCodes.number1,
      KeyCodes.number2,
      KeyCodes.number3,
      KeyCodes.number4,
      KeyCodes.number5,
      KeyCodes.number6,
      KeyCodes.number7,
      KeyCodes.number8,
      KeyCodes.number9,
      KeyCodes.numpad0,
      KeyCodes.numpad1,
      KeyCodes.numpad2,
      KeyCodes.numpad3,
      KeyCodes.numpad4,
      KeyCodes.numpad5,
      KeyCodes.numpad6,
      KeyCodes.numpad7,
      KeyCodes.numpad8,
      KeyCodes.numpad9
    ];

    const letters: Array<number> = [
      KeyCodes.a,
      KeyCodes.b,
      KeyCodes.c,
      KeyCodes.d,
      KeyCodes.e,
      KeyCodes.f,
      KeyCodes.g,
      KeyCodes.h,
      KeyCodes.i,
      KeyCodes.j,
      KeyCodes.k,
      KeyCodes.l,
      KeyCodes.m,
      KeyCodes.n,
      KeyCodes.o,
      KeyCodes.p,
      KeyCodes.q,
      KeyCodes.r,
      KeyCodes.s,
      KeyCodes.t,
      KeyCodes.u,
      KeyCodes.v,
      KeyCodes.w,
      KeyCodes.x,
      KeyCodes.y,
      KeyCodes.z
    ];

    const punctuation: Array<number> = [
      KeyCodes.backSlash,
      KeyCodes.comma,
      KeyCodes.decimalPoint,
      KeyCodes.singleQuote,
      KeyCodes.openBracket,
      KeyCodes.closeBracket,
      KeyCodes.dash,
      KeyCodes.divide,
      KeyCodes.equalSign,
      KeyCodes.forwardSlash,
      KeyCodes.graveAccent,
      KeyCodes.multiply,
      KeyCodes.period,
      KeyCodes.semiColon,
      KeyCodes.subtract
    ];

    return {
      link: link,
      restrict: "E"
    };

    function link(
      scope: angular.IScope,
      element: angular.IAugmentedJQuery,
      attributes: ILimitCharsAttributes): void {

      var allowedKeyCodes: Array<number> = [];

      var options: string = (attributes.limitChars || "").toLowerCase();

      $(element).on("keydown", function (ev: JQueryEventObject): void {


      });
    }
  }
}
