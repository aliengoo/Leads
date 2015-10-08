///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="key-codes.ts"/>

module ui {
  "use strict";
  export function modifierKeyCodes(): Array<number> {
    return [
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
  }
}
