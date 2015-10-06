///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="key-codes.ts"/>

module ui {
  "use strict";
  angular.module("ui").constant("modifierKeyCodes", [
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
  ]);
}
