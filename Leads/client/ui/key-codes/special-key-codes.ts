///<reference path="key-codes.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
module ui {
  "use strict";

  export function specialKeyCodes(): Array<number> {
    return [
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
      KeyCodes.space,
      KeyCodes.subtract
    ];
  }
}
